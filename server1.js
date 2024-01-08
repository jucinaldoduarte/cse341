// express web server
const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Root");
});

app.get('/contact', (req, res) => {
  res.send("Contact");
});

app.get('/help', (req, res) => {
  res.send("Help");
});
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});