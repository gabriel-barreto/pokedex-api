const Router = require('express').Router();
const controller = require('./controllers');

Router.get('/pokemons', controller.list);
Router.get('/pokemons/:id', controller.details);

module.exports = Router;