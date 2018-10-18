const { createPool } = require('mysql');

const connection = createPool({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'tickets-support',
});

module.exports = connection;
