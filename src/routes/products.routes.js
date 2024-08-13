const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');
const productsControllers = require('../controllers/productsControllers');
const cartControllers = require('../controllers/cartControllers');
const multerMid = require('../middlewares/multerProductsMid');
const productValidationMid = require('../middlewares/productValidationMid');
const userUnloggedValidationMid = require('../middlewares/userUnloggedValidationMid');

routes.get('/cart', cartControllers.viewCart);
routes.post('/cart/:productId',userUnloggedValidationMid, cartControllers.addToCart); 

routes.get('/', productsControllers.listAll);

routes.get("/create", productsControllers.create);

// -- Rutas CRUD de DB
routes.get('/', productsControllers.listAll);
routes.get('/filter', productsControllers.filter);
routes.get('/serch', productsControllers.serch);
routes.get('/:id', productsControllers.detail);

routes.post('/', multerMid.fields([{ name: 'imagen' }]), productValidationMid, productsControllers.store);

routes.get("/edit/:id", productsControllers.edit);
routes.put('/:id', multerMid.fields([{ name: 'imagen' }]), productValidationMid, productsControllers.update);

routes.delete('/:id', productsControllers.delete);


module.exports = routes;