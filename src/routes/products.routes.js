const express = require('express');
const routes = express.Router();

const productsControllers = require('../controllers/productsControllers');


routes.get('/detail/:id', productsControllers.detail);
  
routes.get('/cart', productsControllers.cart);

routes.get('/create', productsControllers.create);

routes.get("/edit/:id", productsControllers.edit);

routes.get('/', productsControllers.getAll);


module.exports = routes;