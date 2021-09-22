const express = require('express');

const UserController = require('./controllers/UserController')
const AdressController = require('./controllers/AddressController')

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.get('/users/:user_id/addresses', AdressController.index)
routes.post('/users/:user_id/addresses', AdressController.store)

module.exports = routes;