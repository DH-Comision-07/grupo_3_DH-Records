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
    },
    save: function(product) {
        let lastId = 0;
        for (let existingProduct of this.products) {
            if (existingProduct.id > lastId) {
                lastId = existingProduct.id;
            }
        }
        product.id = lastId + 1;
        
        this.products.push(product);
    }
}

module.exports = productService;