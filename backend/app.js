var express = require("express");
var app = express(); 
var testRoute = require("./routes/test"); 

app.use("/", testRoute);

app.listen(3000);

module.exports = app;


