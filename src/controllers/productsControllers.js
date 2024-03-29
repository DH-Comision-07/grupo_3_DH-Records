
const productService = require ('../models/productService');


let productsControllers = {

    detail: function (req, res) {
        let productId = (productService.getBy(req.params.id));
        res.render('products/detail', {productId});
    },

    detailDelete: function (req, res) {
        let productId = req.params.id;
        let message = productService.delete(productId);
        res.redirect('/products');
    },

    cart: function (req, res) {
        res.render('products/cart');
    },


    create: function (req, res) {
        res.render('products/create');
    },

    edit: function (req, res) {
        let productId = (productService.getBy(req.params.id));
        res.render('products/edit', {productId});
    },

    getAll: function (req, res) {
        res.render('products/products', {products: productService.getAll()});

    }

}

module.exports = productsControllers;