var express = require("express");
var app = express();

app.get('/', function(req, res) {
	res.send("Hello World");
}).listen(8080);

console.log("Server is running on 8080");