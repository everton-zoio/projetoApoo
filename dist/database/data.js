"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
var connection = mysql_1.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: 'root',
    password: '@ever1515',
    database: 'mydb'
});
connection.connect(function (err) {
    if (err)
        return console.log(err);
    console.log("Conectado ao Banco de Dados com Sucesso!");
});
/*
connection.query('', (err: QueryError, rows: RowDataPacket[]) => {

});
*/
module.exports = connection;
