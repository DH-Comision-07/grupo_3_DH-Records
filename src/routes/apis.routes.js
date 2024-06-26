const express = require('express');
const routes = express.Router();

const apisControllers = require('../controllers/apisControllers');
const apisUsersControllers = require('../controllers/apisUsersControllers');


routes.get('/users', apisUsersControllers.listAll)
routes.get('/users/:id', apisUsersControllers.detail)



routes.get('/products', apisControllers.listAll);
routes.get('/products/:id', apisControllers.detail);
routes.get('/products/test', apisControllers.test);

module.exports = routes;