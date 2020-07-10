import mysql = require('mysql');

export let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test',
  
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

