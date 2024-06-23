const express = require('express');
const routes = express.Router();

const productsControllers = require('../controllers/productsControllers');

routes.get('/', productsControllers.home);

module.exports = routes;


