const express = require("express");
const {client, dbconnect} = require('../config/dbconnect');

const app = express();

app.set('view engine', 'ejs');
app.set('views', '../views');

app.use(express.static('../public'));

dbconnect();

app.get('/', (req, res) => {
    res.send('hello node');
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/contacts', require('./contactRoutes'));

app.listen(3000, () => {
     console.log('Server Listening');
})