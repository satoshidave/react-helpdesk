const { createPool, createConnection } =  require('mysql');
const connection = createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'tickets-support'
});

module.exports = connection;