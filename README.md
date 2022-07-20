# Information

* Small NPM package that allows you to interact easier with your database.
* Shortens your database query code up to 10 times!
* MySQL pool and Promise-Object based, you are able to use .then, .catch etc.
* Useful for people who keep their code clean and short.

# Install

`$ npm install sql-simplified`

# Basic Usage
```js
const database = require('sql-simplified');


database.customQuery(`SELECT * FROM customers WHERE customerId = '1234'`).then(function(result) {

//SQL Query will be: `SELECT * FROM customers WHERE customerID = '1234'`

    console.log(result);
    /* Output:

    [
        RowDataPacket {
            customerId: 1234,
            customerName: 'Bob Andrew',
            phone: '123456789'
        }
    ]

    */
})


database.updateWhereQuery('users', 'id', '45657', 'name', 'John').then(function(result) {

//SQL Query will be: `UPDATE users SET id = 45657 WHERE name = 'John'`

    console.log(result);
    /* Output:

    OkPacket {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        serverStatus: 2,
        warningCount: 0,
        message: '(Rows matched: 1  Changed: 1  Warnings: 0',
        protocol41: true,
        changedRows: 1
    }
    */
})

```

# Functions
```js
.customQuery(query)
// SQL Syntax: `YOUR OWN SYNTAX`

.selectQuery(column, table)
// SQL Syntax: `SELECT column FROM table`

.selectWhereQuery(column, table, where, where_value)
// SQL Syntax: `SELECT column FROM table WHERE where = 'where_value'`

.selectGroupConcatSeperatorQuery(column, seperator, as_value, table)
// SQL Syntax: `SELECT GROUP_CONCAT(column SEPERATOR 'seperator') as "as_value" FROM table`

.insertQuery(table, column, value)
// SQL Syntax: `INSERT INTO table (column/s) VALUES (value/s)`

.updateQuery(table, column, column_value)
// SQL Syntax: `UPDATE table SET column = 'column_value'`

.updateWhereQuery(table, column, column_value, where, where_value)
// SQL Syntax: `UPDATE table SET column = 'column_value' WHERE where = 'where_value'`

.updateConcatWhereQuery(table, column, column_value, where, where_value)
// SQL Syntax: `UPDATE table SET column = CONCAT(column, 'column_value') WHERE where = 'where_value'`

.deleteQuery(table, where, where_value)
// SQL Syntax: `DELETE FROM table WHERE where = 'where_value'`
```

# Requirements

You need a `.env` file with the following information in your project root directory:

```env
SQLS_CONNECTIONLIMIT=100
SQLS_HOST=host
SQLS_PORT=port
SQLS_USER=user
SQLS_PASSWORD=password
SQLS_DATABASE=database
```

# Contact

For question, suggestions, ideas etc, feel free to join my [Discord server](https://discord.gg/XREwwMM9Bv), or create an issue on [GitHub](https://github.com/emiratee/sql-simplified).