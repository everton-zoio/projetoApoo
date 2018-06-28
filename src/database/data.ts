import {createConnection, QueryError, RowDataPacket} from 'mysql';

var connection = createConnection({
    host: "127.0.0.1",
    port: 3306, //	Porta padrão do mysql
    user: 'root',
    password: '@ever1515',
    database: 'mydb'
});
connection.connect(function(err){
    if(err) return console.log(err);
    console.log("Conectado ao Banco de Dados com Sucesso!");
});
/*
connection.query('', (err: QueryError, rows: RowDataPacket[]) => {

});
*/
module.exports = connection;