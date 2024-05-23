const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');
const productsControllers = require('../controllers/productsControllers');
const multerMid = require('../middlewares/multerProductsMid');

//--- Rutas de productos 


routes.delete('/:id', productsControllers.detailDelete);
routes.get('/cart', productsControllers.cart);

// -- Rutas en desarrollo CRUD de DB
routes.get('/', productsControllers.listAll);
routes.get('/detail/:id', productsControllers.detail);

routes.get("/create", productsControllers.create);
routes.post('/', multerMid.fields([{ name: 'imagen' }]), productsControllers.store);

routes.get("/edit/:id", productsControllers.edit);
routes.put('/:id', multerMid.fields([{ name: 'imagen' }]), productsControllers.update);

// -- Rutas deprecated
//routes.get('/create-deprecated', productsControllers.create);
//routes.post('/', multerMid.fields([{ name: 'imagen' }]), productsControllers.store);

module.exports = routes;