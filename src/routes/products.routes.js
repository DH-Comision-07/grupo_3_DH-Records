const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');
const productsControllers = require('../controllers/productsControllers');
const multerMid = require('../middlewares/multerProductsMid');

//--- Rutas de productos 

routes.get('/', productsControllers.listAll);

routes.get('/detail/:id', productsControllers.detail);

routes.delete('/:id', productsControllers.detailDelete);

routes.get('/cart', productsControllers.cart);

routes.get("/edit/:id", productsControllers.edit);


// -- Rutas en desarrollo CRUD de DB
routes.get("/create", productsControllers.create);
routes.post('/', multerMid.fields([{ name: 'imagen' }]), productsControllers.store);

// -- Rutas deprecated
//routes.get('/create-deprecated', productsControllers.create);
//routes.post('/', multerMid.fields([{ name: 'imagen' }]), productsControllers.store);

module.exports = routes;