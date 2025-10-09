require('dotenv').config();
const {Client} = require('pg');

const client = new Client({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})

const dbconnect = async () => {
    try {
        await client.connect();
        console.log('DB Connected');

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS nodejs_contacts (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                eail VARCHAR(100),
                phone VARCHAR(20) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW(),
            );
        `;
        await client.query(createTableQuery);
        console.log("contacts table is ready");
    } catch(err) {
        console.log(err);
    }
}

module.exports = {client, dbconnect};