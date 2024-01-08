const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.rootRoute);
routes.get('/contact', lesson1Controller.contactRoute);
routes.get('/help', lesson1Controller.helpRoute);

module.exports = routes;