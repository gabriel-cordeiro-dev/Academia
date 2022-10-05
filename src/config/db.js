require('dotenv').config()
const { Pool } = require('pg')

module.exports = new Pool({
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: 5432,
    database: process.env.DBNAME
})