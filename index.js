const { pool } = require('./server');

//Better error code

exports.mysqlQuery = async function(query) {
    return new Promise(async (resolve) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, async function (err, result) {
                if (!query) throw new ReferenceError('query is undefined');
                if (err) throw err;
                connection.release();
                resolve(result);
            });
        });
    });
}
