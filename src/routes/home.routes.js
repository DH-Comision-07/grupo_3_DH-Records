const express = require('express');
const routes = express.Router();
const path = require ('path');

const productsRoutes = require('./products.routes');
const usersRoutes = require('./users.routes');


routes.use('/products', productsRoutes);
routes.use('/users', usersRoutes);


routes.get('/', (req,res) => res.sendFile(path.resolve(__dirname, '../views/home.html')));



module.exports = routes;


