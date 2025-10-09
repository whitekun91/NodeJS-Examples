const asyncHandler = require('express-async-handler');
const {client, dbconnect} = require('../config/dbconnect');
const e = require("express");

// Get all contacts
const getAllContacts = asyncHandler(async (req, res) => {
    const query = `SELECT * FROM nodejs_contacts ORDER BY id ASC`;
    const result = await client.query(query);
    res.render("index", {result:result.rows});
});

// View add Contact form
const addContactForm = (req, res)=>{
    res.render("add");
}

const createContacts = asyncHandler(async (req, res) => {
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        return res.send('필수 값이 입력되지 않았습니다.')
    }
    const query = `
        INSERT INTO nodejs_contacts (name, email, phone)
        VALUES ($1, $2, $3) 
        RETURNING *; 
        `;

    const values = [name, email, phone];
    const result = await client.query(query, values);
    res.send("Create Contacts");
    // return res.json({
    // message: "Contact created successfully",
    // contact:result.rows[0]
    // })
});

const getContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM nodejs_contacts WHERE id = $1';
    const result = await client.query(query, [id]);
    res.json(result.rows[0]);
    // res.send(View Contact for ID : ${req.params.id});
})

const updateContact = asyncHandler(async (req, res) => {
    // res.send(Update Contact for ID : ${req.params.id});
    const id = req.params.id;
    const {name, email, phone} = req.body;

    const query = 'UPDATE nodejs_contacts SET name=$1, email=$2, phone=$3, updated_at=NOW() WHERE id =$4';
    const value =[name, email, phone, id];

    const result = await client.query(query, value);
    res.send('Update Contact for ID : ${id}');
})

const deleteContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM nodejs_contacts WHERE id =$1';
    const result = await client.query(query, [id]);
    res.send('Delete Contact for ID : ${req.params.id}');
})


module.exports = {
    getAllContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact,
    addContactForm
};