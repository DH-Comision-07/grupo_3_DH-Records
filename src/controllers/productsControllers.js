
const productService = require ('../models/productService');


let productsControllers = {

    detail: function(req, res) {
        let productId = (productService.getBy(req.params.id));
        res.render('products/detail', {productId});
    },

    detailDelete: function(req, res) {
        let productId = req.params.id;
        let productDeleted = productService.delete(productId);
        if (productDeleted) {
            res.redirect('/products');
        } else {
            return res.status(404).send('Product not found');
        }    
    },

    cart: function(req, res) {
        res.render('products/cart');
    },

    create: function(req, res) {
        res.render('products/create');
    },

    store: function(req, res) {
        // datos del formulario y el archivo de imagen
        const productData = req.body;
        const imagen = req.files.imagen[0];
    
        // Llamada al service
        let productStored = productService.store(productData, imagen);
    
        if (productStored) {
            res.redirect('/products');
        } else {
            res.status(404).send('Product not Created');
        } 
    },

    edit: function(req, res) {
        let productId = (productService.getBy(req.params.id));
        res.render('products/edit', {productId});
    },

    getAll: function(req, res) {
        res.render('products/products', {products: productService.getAll()});

    }
}

module.exports = productsControllers;