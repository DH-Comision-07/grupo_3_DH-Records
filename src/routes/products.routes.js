const express = require('express');
const routes = express.Router();

const productsControllers = require('../controllers/productsControllers');
const multerMid = require('../middlewares/multerProductsMid');
const productValidationMid = require('../middlewares/productValidationMid');

routes.get('/', productsControllers.listAll);

routes.get("/create", productsControllers.create);
routes.post('/', multerMid.fields([{ name: 'imagen' }]), productValidationMid, productsControllers.store);

routes.get('/filter', productsControllers.filter);
routes.get('/:id', productsControllers.detail);

routes.get("/edit/:id", productsControllers.edit);
routes.put('/:id', multerMid.fields([{ name: 'imagen' }]), productValidationMid, productsControllers.update);

routes.delete('/:id', productsControllers.delete);


module.exports = routes;