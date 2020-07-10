"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
});
exports.connection.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});
