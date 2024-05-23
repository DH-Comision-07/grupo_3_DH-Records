
const productService = require ('../models/db/services/productService');
const genreService = require ('../models/db/services/genreService');
const authorService = require ('../models/db/services/authorService');

let productsControllers = {

    home: async function(req, res) {
        try { //si todo sale bien
            let productsArray = await productService.getAll()
            res.render('home', {products: productsArray});
        } catch (error) { //si sale mal
            res.send('Error inesperado').status(500);
        }
    },

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

    create: async function(req, res) {
        try {
            let genres = await genreService.getAll();
            let authors = await authorService.getAll();
            res.render('products/create', {genres, authors});
        } catch (error) {
            res.send('Error inesperado').status(500);
        }
    },
    
    store: async function(req, res) {
        try {
            const productData = req.body;
            const imagen = req.files.imagen[0];
            
            let producto = await productService.storeDB(productData, imagen)
            res.redirect('/products'); 
        } catch (error) {
            console.error(error);
            res.status(500).send('Error inesperado');
        }
    },
    
    // Metodos a reemplazar con CRUD de DB

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
    
    edit: function(req, res) {
        let productId = (productService.getBy(req.params.id));
        res.render('products/edit', {productId});
    },
    
    
    //este metodo no se a que hace referencia, hay que probar con eliminarlo
    getProductDetail: function(req, res) {
        const productId = req.params.id;
        const product = productService.getBy(productId);
        
        if (!product) {
            return res.status(404).send('Product not found');
        }
        
        res.render('products/detail', { product });
    },

    //metodos en que quedaron obsoletos
    createDeprecated: function(req, res) {
        res.render('products/create');
    },
    
    storeDeprecated: function(req, res) {
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
    }

};

module.exports = productsControllers;