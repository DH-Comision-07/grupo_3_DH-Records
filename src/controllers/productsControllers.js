const path = require ('path');

let productsControllers = {

    productDetail: function (req, res) {
        res.render('products/product-detail');
    },

    carrito: function (req, res) {
        res.render('products/carrito');
    }
}

module.exports = productsControllers;