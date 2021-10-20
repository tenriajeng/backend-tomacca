var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "onlineclass",
});

connection.connect();
module.exports = connection;
