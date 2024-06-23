const express = require('express');
const routes = express.Router();

const apisControllers = require('../controllers/apisControllers');

routes.get('/products', apisControllers.listAll);
routes.get('/products/test', apisControllers.test);

module.exports = routes;