const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'mysqlpwd',
    database: 'myapp'
});

exports.pool = pool;