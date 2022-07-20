const { pool } = require('./server')

//Better error codes

exports.customQuery = async function(query) {
    return new Promise(async (resolve) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            let sql = query;
            connection.query(sql, async function (err, result) {
                if (!query) throw new ReferenceError('query is undefined');
                if (err) throw err;
                connection.release();
                resolve(result);
            })
        })
    })
}

exports.selectQuery = async function (column, table) {
    return new Promise(async (resolve) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            let sql = `SELECT ${column} FROM ${table}`;
            connection.query(sql, async function (err, result) {
                if (!column || !table) throw new ReferenceError('column or table is undefined')
                if (err) throw err;
                connection.release();
                resolve(result)
            })
        })
    })
}

exports.selectWhereQuery = async function (column, table, where, where_value) {
    return new Promise(async (resolve) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            let sql = `SELECT ${column} FROM ${table} WHERE ${where} = '${where_value}'`;
            connection.query(sql, async function (err, result) {
                if (!column || !table || !where || !where_value) throw new ReferenceError('column, table, where, or where_value is undefined')
                if (err) throw err;
                connection.release();
                resolve(result)
            })
        })
    })
}

exports.selectGroupConcatSeperatorQuery = async function (column, seperator, as_value, table) {
    return new Promise(async (resolve) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            let sql = `SELECT GROUP_CONCAT(${column} SEPERATOR '${seperator}') as "${as_value}" FROM ${table}`;
            connection.query(sql, async function (err, result) {
                if (!column || !seperator || !as || !table) throw new ReferenceError('column, seperator, as or table is undefined');
                if (err) throw err;
                connection.release();
                resolve(result);
            })
        })
    })
}

exports.insertQuery = async function (table, column, value) {
    return new Promise(async (resolve) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            let sql = `INSERT INTO ${table} (${column}) VALUES (${value})`;
            connection.query(sql, async function (err, result) {
                if (!table || !column || !value) throw new ReferenceError('table, column or value is undefined')
                if (err) throw err;
                connection.release();
                resolve(result);
            })
        })
    })
}

exports.updateQuery = async function (table, column, column_value) {
    return new Promise(async (resolve) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            let sql = `UPDATE ${table} SET ${column} = '${column_value}'`;
            connection.query(sql, async function (err, result) {
                if (!table || !column || !column_value) throw new ReferenceError('table, column or column_value is undefined')
                if (err) throw err;
                connection.release();
                resolve(result)
            })
        })
    })
}

exports.updateWhereQuery = async function (table, column, column_value, where, where_value) {
    return new Promise(async (resolve) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            let sql = `UPDATE ${table} SET ${column} = ${column_value} WHERE ${where} = '${where_value}'`;
            connection.query(sql, async function (err, result) {
                if (!table || !column || !column_value || !where || !where_value) throw new ReferenceError('table, column, column_value, where or where_value is undefined')
                if (err) throw err;
                connection.release();
                resolve(result)
            })
        })
    })
}

exports.updateConcatWhereQuery = async function (table, column, column_value, where, where_value) {
    return new Promise(async (resolve) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            let sql = `UPDATE ${table} SET ${column} = CONCAT(${column}, '${column_value}') WHERE ${where} = ${where_value}`;
            connection.query(sql, async function (err, result) {
                if (!table || !column || !column_value || !where || !where) throw new ReferenceError('table, column, column_value, where or where_value is undefined')
                if (err) throw err;
                connection.release();
                resolve(result)
            })
        })
    })
}

exports.deleteQuery = async function (table, where, where_value) {
    return new Promise(async (resolve) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            let sql = `DELETE FROM ${table} WHERE ${where} = '${where_value}'`;
            connection.query(sql, async function (err, result) {
                if (!table || !where || !where_value) throw new ReferenceError('table, where or where_value is undefined')
                if (err) throw err;
                connection.release();
                resolve(result);
            })
        })
    })
}