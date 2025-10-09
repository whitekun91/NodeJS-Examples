const express = require('express');
const app = express();

const router = express.Router();

// Main page
app.get('/', (req, res) => {
    res.send('Hello Node');
});


router
    .route('/contacts')
    .get((req, res) => {
        res.send('Contacts page');
    })
    .post((req, res) => {
        res.send('Create Contacts')
    });

router
    .route('/contacts/:id')
    .get((req, res) => {
        res.send(`View Contact for ID : ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update Contact for ID : ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Update Contact for ID : ${req.params.id}`);
    });

app.use(router);

app.listen(3000, () => {
    console.log('Server Listening');
});