const Router = require('express').Router();
const controller = require('./controllers');

Router.get('/pokemon', controller.list);
Router.get('/pokemon/:id', controller.details);

module.exports = Router;