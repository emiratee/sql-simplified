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

```

# Functions
```js
.customQuery(query)
// SQL Syntax: `YOUR OWN SYNTAX`
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