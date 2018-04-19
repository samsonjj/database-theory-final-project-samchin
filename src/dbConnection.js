var mysql = require('mysql');

// connection settings
const dbHostName = 'samson-chin-mysql-instance.cvvvgjkf3mzt.us-east-2.rds.amazonaws.com';
const dbPort = 3306;
const dbUsername = 'samsonchin';
const dbPassword = 'samsonchin';
const dbName = 'health_insurance_database';
var connection = mysql.createConnection({
	host: dbHostName,
	port: dbPort,
	user: dbUsername,
	password: dbPassword,
	database: dbName
});

connection.connect(function(err) {
	if(err) {
		console.log('error connecting: ' + err.stack);
		return;
	}
	console.log('connected to health_insurance_database');
});