const path = require ('path');

let productsControllers = {

    productDetail: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/products/product-detail.html'));
    },

    carrito: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/products/carrito.html'));
    }
}

module.exports = productsControllers;