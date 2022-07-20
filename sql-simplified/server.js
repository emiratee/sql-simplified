require('dotenv').config();
const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit:        process.env.CONNECTIONLIMIT,
    host:                   process.env.HOST,
    port:                   process.env.PORT,
    user:                   process.env.USER,
    password:               process.env.PASSWORD,
    database:               process.env.DATABASE,
    multipleStatements:     true
});

module.exports = { pool };
//Do not change anything in this file!