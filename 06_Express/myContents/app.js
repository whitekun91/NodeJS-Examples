const express = require('express');
const app = express();


// Main page
app.get('/', (req, res) => {
    res.send('Hello Node');
});

// get contacts page
app.get('/contacts', (req, res) => {
    res.send('Contacts page');
});

// add new contacts
app.post('/contacts', (req, res) => {
    res.send('Create Contacts')
});

app.get('/contacts/:id', (req, res) => {
    res.send(`View Contact for ID : ${req.params.id}`);
});

// edit contacts
app.put('/contacts/:id', (req, res) => {
    res.send(`Update Contact for ID : ${req.params.id}`);
});

app.delete('/contacts/:id', (req, res) => {
    res.send(`Update Contact for ID : ${req.params.id}`);
});

app.listen(3000, () => {
    console.log('Server Listening');
});