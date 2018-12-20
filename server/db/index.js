var mysql = require('mysql');
var mysqlConfig = require('../config.js').mysqlConfig;

var connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Successfully connected to database.')
});

module.exports = connection;