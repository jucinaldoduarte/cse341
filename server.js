// express web server
/*
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
*/


const express = require('express');
const app = express();
const port = 3000;
 
app.get('/', (req, res) => {
  res.send("Hello");
});
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});