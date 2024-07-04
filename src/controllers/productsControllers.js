
const productService = require ('../models/db/services/productService');
const genreService = require ('../models/db/services/genreService');
const authorService = require ('../models/db/services/authorService');

const { validationResult } = require('express-validator');

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
            let products = await productService.getAll()
            let genres = await genreService.getAll();
            let authors = await authorService.getAll();
            let filterData = true;
            let message;
            message = products.length === 0 ? 'No se encontraron productos' : null;
            res.render('products/products', {products, genres, authors, message, filterData});
        } catch (error) { //si sale mal
            res.send('Error inesperado').status(500);
        }
    },

    filter: async function(req, res) {
        try {
            const { genero, autor, precioMin, precioMax } = req.query;
            let products = await productService.applyFilters(genero, autor, precioMin, precioMax);
            let genres = await genreService.getAll();
            let authors = await authorService.getAll();
            let filterData = { genero, autor, precioMin, precioMax };
            let message;
            message = products.length === 0 ? 'No se encontraron productos' : null;
            res.render('products/products', {products, genres, authors, message, filterData});
        } catch (error) {
            console.error(error);
            res.send('Error inesperado').status(500);
        }
    },

    serch: async function(req, res) {
        
        const query = req.query.serch;

        try {
            const products = await productService.findLike(query);
            let genres = await genreService.getAll();
            let authors = await authorService.getAll();
            let filterData = null;
            let message;
            message = products.length === 0 ? 'No se encontraron productos' : null;
            res.render('products/products', {products, genres, authors, message, filterData});
        } catch (error) {
            console.error(error);
            res.send('Error en la búsqueda').status(500);
        }
    },

    detail: async function(req, res) {
        try { //si todo sale bien
            let productId = await productService.getBy(req.params.id);
            let productRef = await productService.getByGenre(productId.genero_id);
            res.render('products/detail', {productId, productRef});
        } catch (error) { //si sale mal
            res.send('Error inesperado').status(500);
        }
    },


    create: async function(req, res) {
        try {
            let genres = await genreService.getAll();
            let authors = await authorService.getAll();
            res.render('products/create', {genres, authors, oldData: {}, expressValidatorErrors: [], multerError: null});
        } catch (error) {
            console.log(error);
            res.send('Error inesperado').status(500);
        }
    },
    
    store: async function(req, res) {
        try {
            const productData = req.body;
            const expressValidatorErrors = validationResult(req).array();
            const multerError = req.multerValidationError;
           
            if(expressValidatorErrors > 0 || multerError !== false){
                let genres = await genreService.getAll();
                let authors = await authorService.getAll();
                return res.render('products/create', {genres, authors, oldData: productData,  expressValidatorErrors, multerError});
            }

            //debo revisar si se creo un nuevo autor antes de guardar el producto en la DB
            if (productData.newAuthor) {
                let newAuthor = await authorService.storeDB(productData.newAuthor);
                productData.autor = newAuthor.id;
            }
                
            const imagen = req.files.imagen[0];
            let producto = await productService.storeDB(productData, imagen)
            res.redirect('/products'); 
            
        } catch (error) {
            console.error(error);
            res.status(500).send('Error inesperado');
        }
    },

    edit: async function(req, res) {
        try {
            let genres = await genreService.getAll();
            let authors = await authorService.getAll();
            let productId = await productService.getBy(req.params.id);
            res.render('products/edit', {genres, authors, productId});
            //res.send(productId);
        } catch (error) {
            res.send('Error inesperado').status(500);
        }
    },

    update: async function(req, res) {
        try {
            const productId = req.params.id;
            const productData = req.body;

            //si en el form vino una nueva imagen, necesito actualizar
            const imagen = req.files.imagen ? req.files.imagen[0] : null;

            //debo revisar si se creo un nuevo autor antes de guardar el producto en la DB
            if (productData.newAuthor) {
                let newAuthor = await authorService.storeDB(productData.newAuthor);
                productData.autor = newAuthor.id;
            }
            
            await productService.updateDB(productId, productData, imagen);
            
            res.redirect(`/products/${productId}`); 
        } catch (error) {
            console.error(error);
            res.status(500).send('Error inesperado');
        }
    },

    delete: async function(req, res) {
        try {
            let productId = req.params.id;
            await productService.delete(productId);
            res.redirect('/products');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error inesperado');
        }
    },
    
    // Metodos a reemplazar con CRUD de DB

    cart: function(req, res) {
        res.render('products/cart');
    }  

};

module.exports = productsControllers;