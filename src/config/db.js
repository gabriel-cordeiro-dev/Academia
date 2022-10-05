const { Pool } = require('pg')

module.exports = new Pool({
    user: 'gymmanager',
    password: 'gymmanager123',
    host: 'gymmanager.cqi18ydtvhey.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'gymmanager'
})