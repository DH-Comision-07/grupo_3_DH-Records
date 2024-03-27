const path = require('path');
const fs = require('fs');

const products = require('./products.json');

let productService = {
    products: products,

    getAll: function() {
    return this.products;
    },
    getBy: function(id) {
    return this.products.find(product => product.id == id);
    }
}

module.exports = productService;