const express = require('express');
const routes = express.Router();

const productsControllers = require('../controllers/productsControllers');
const productsRoutes = require('./products.routes');
const usersRoutes = require('./users.routes');


routes.use('/products', productsRoutes);
routes.use('/users', usersRoutes);

routes.get('/', productsControllers.home);


module.exports = routes;


