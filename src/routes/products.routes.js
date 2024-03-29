const express = require('express');
const routes = express.Router();
const multer = require('multer');
const productsControllers = require('../controllers/productsControllers');


routes.get('/detail/:id', productsControllers.detail);

routes.delete('/:id', productsControllers.detailDelete);

routes.get('/cart', productsControllers.cart);

routes.get('/create', productsControllers.create);

routes.get("/edit/:id", productsControllers.edit);

routes.get('/', productsControllers.getAll);

routes.post('/', productsControllers.store);




module.exports = routes;