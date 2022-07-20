require('dotenv').config();
const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit:        process.env.SQLS_CONNECTIONLIMIT,
    host:                   process.env.SQLS_HOST,
    port:                   process.env.SQLS_PORT,
    user:                   process.env.SQLS_USER,
    password:               process.env.SQLS_PASSWORD,
    database:               process.env.SQLS_DATABASE,
    multipleStatements:     true
});

module.exports = { pool };
//Do not change anything in this file!