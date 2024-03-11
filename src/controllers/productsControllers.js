const path = require ('path');

let productsControllers = {

    productDetail: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/products/product-detail.ejs'));
    },

    carrito: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/products/carrito.ejs'));
    }
}

module.exports = productsControllers;