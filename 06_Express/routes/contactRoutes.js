const express = require("express");


const router = express.Router();

const {getAllContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact,
    addContactForm
} = require('../controllers/contactController');

router.route('/').get(getAllContacts).post(createContacts);
router.route('/add').get(addContactForm);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;