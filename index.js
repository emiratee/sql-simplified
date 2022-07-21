const { pool } = require('./server')

//Better error code

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