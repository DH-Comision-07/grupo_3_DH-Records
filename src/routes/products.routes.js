const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');
const productsControllers = require('../controllers/productsControllers');
const multerMid = require('../middlewares/multerProductsMid');

//--- Rutas de productos 

routes.get('/cart', productsControllers.cart);

routes.get("/create", productsControllers.create);

// -- Rutas CRUD de DB
routes.get('/', productsControllers.listAll);
routes.get('/filter', productsControllers.filter);
routes.get('/:id', productsControllers.detail);

routes.post('/', multerMid.fields([{ name: 'imagen' }]), productsControllers.store);

routes.get("/edit/:id", productsControllers.edit);
routes.put('/:id', multerMid.fields([{ name: 'imagen' }]), productsControllers.update);

routes.delete('/:id', productsControllers.delete);


module.exports = routes;