const path = require('path');
const fs = require('fs');
const productFile = path.join(__dirname,'/product');

const products = require('./product.json');


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