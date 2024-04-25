const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');
const productsControllers = require('../controllers/productsControllers');
const multerMid = require('../middlewares/multerMid');

//--- Rutas de productos 

routes.get('/detail/:id', productsControllers.detail);

routes.delete('/:id', productsControllers.detailDelete);

routes.get('/cart', productsControllers.cart);

routes.get('/create', productsControllers.create);

routes.get("/edit/:id", productsControllers.edit);

routes.get('/', productsControllers.getAll);

//routes.post('/', upload.fields([{ name: 'imagen' }]), productsControllers.store);




module.exports = routes;