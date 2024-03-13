const path = require ('path');

let productsControllers = {

    productDetail: function (req, res) {
        res.render('products/product-detail');
    },

    carrito: function (req, res) {
        res.render('products/carrito');
    },

    newProduct: function (req, res) {
        res.render('products/new-product');
    }
}

module.exports = productsControllers;