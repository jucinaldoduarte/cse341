// express web server
const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');
 
app.get('/', lesson1Controller.rootRoute);

app.get('/contact', lesson1Controller.contactRoute);

app.get('/help', lesson1Controller.helpRoute);
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});