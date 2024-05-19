
const productService = require ('../models/db/services/productService');


let productsControllers = {

    listAll: async function(req, res) {
        try { //si todo sale bien
            let productsArray = await productService.getAll()
            res.render('products/products', {products: productsArray});
        } catch (error) { //si sale mal
            res.send('Error inesperado').status(500);
        }

    },

    detail: async function(req, res) {
        try { //si todo sale bien
            let productId = await productService.getBy(req.params.id)
            res.render('products/detail', {productId});
        } catch (error) { //si sale mal
            res.send('Error inesperado').status(500);
        }

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

    getProductDetail: function(req, res) {
        const productId = req.params.id;
        const product = productService.getBy(productId);
    
        if (!product) {
          return res.status(404).send('Product not found');
        }
    
        res.render('products/detail', { product });
      },

      home: async function(req, res) {
        try { //si todo sale bien
            let productsArray = await productService.getAll()
            //res.send(productsArray);
            //res.send(productsArray[0].imagenesProductos[0].nombre);
            res.render('home', {products: productsArray});
        } catch (error) { //si sale mal
            res.send('Error inesperado').status(500);
        }
    }


    };
    


module.exports = productsControllers;