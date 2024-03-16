const express = require('express');
const routes = express.Router();
const path = require ('path');

const productsControllers = require('../controllers/productsControllers');



routes.get('/product-detail', productsControllers.productDetail);
  
routes.get('/carrito', productsControllers.carrito);

routes.get('/new-product', productsControllers.newProduct);

routes.get("/edit-product", productsControllers.editProduct);

routes.get('/productos', productsControllers.AllProducts);


module.exports = routes;