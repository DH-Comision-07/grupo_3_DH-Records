const path = require ('path');
const productos = require ('../models/product');
const productService = require ('../models/productService');


let productsControllers = {

    productDetail: function (req, res) {
        let productId = (productService.getBy(req.params.id));
        res.render('products/product-detail',{productId});
    },

    carrito: function (req, res) {
        res.render('products/carrito');
    },


    newProduct: function (req, res) {
        res.render('products/new-product');
    },

    editProduct: function (req, res) {
        res.render('products/edit-product');
    },

    AllProducts: function (req, res) {
        res.render('products/productos', {products: productService.getAll()});

    },


}


module.exports = productsControllers;