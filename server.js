// express web server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Root");
});

app.get('/home', (req, res) => {
    res.send("Home");
});

app.get('/Contact', (req, res) => {
    res.send("Contact");
});
   
  app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});