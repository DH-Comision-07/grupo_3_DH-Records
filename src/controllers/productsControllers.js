const productService = require ('../models/productService');


let productsControllers = {

    detail: function (req, res) {
        let productId = (productService.getBy(req.params.id));
        res.render('products/detail', {productId});
    },

    cart: function (req, res) {
        res.render('products/cart');
    },

    create: function (req, res) {
        res.render('products/create');
    },

    store: function (req, res) {
        productService.save(req.body);
        res.send(req.body);
        //res.redirect('/');
    },

    edit: function (req, res) {
        res.render('products/edit');
    },

    getAll: function (req, res) {
        res.render('products/products', {products: productService.getAll()});

    }

}

module.exports = productsControllers;