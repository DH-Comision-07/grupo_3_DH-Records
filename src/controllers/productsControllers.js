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

    save: function (req, res) {
        let product = {
            nombre: req.body.nombreDisco,
            genero: req.body.generoDisco,
            descripcion: req.body.descripcion,
            autor: req.body.autor,
            discografica: req.body.discografica,
            precioCosto: req.body.precioCosto,
            precioVenta: req.body.precioVenta,
            stock: req.body.stock,
            imagen: req.body.imagen,
            anio: req.body.anio,
            estilo: req.body.estilo,
            canciones: req.body.canciones,
        }
        
        res.send(product);
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