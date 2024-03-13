const express = require('express');
const routes = express.Router();
const path = require ('path');

const productsControllers = require('../controllers/productsControllers');



routes.get('/product-detail', productsControllers.productDetail);
  
routes.get('/carrito', productsControllers.carrito);

routes.get('/productos', productsControllers.AllProducts);

module.exports = routes;