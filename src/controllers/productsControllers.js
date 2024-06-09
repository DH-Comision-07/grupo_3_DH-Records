
const productService = require ('../models/db/services/productService');
const genreService = require ('../models/db/services/genreService');
const authorService = require ('../models/db/services/authorService');

const { validationResult } = require('express-validator');
const multer = require('multer');

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
            let genres = await genreService.getAll();
            let authors = await authorService.getAll();
            res.render('products/products', {products: productsArray, genres, authors});
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
            res.render('products/products', {products, genres, authors});
        } catch (error) {
            res.send('Error inesperado').status(500);
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
            res.render('products/create', {genres, authors});
        } catch (error) {
            console.log(error);
            res.send('Error inesperado').status(500);
        }
    },
    
    store: async function(req, res) {
        try {
            const productData = req.body;
            const imagen = req.files.imagen[0];

            //debo revisar si se creo un nuevo autor antes de guardar el producto en la DB
            if (productData.newAuthor) {
                let newAuthor = await authorService.storeDB(productData.newAuthor);
                productData.autor = newAuthor.id;
            }

            let producto = await productService.storeDB(productData, imagen)
            res.redirect('/products'); 
        } catch (error) {
            console.error(error);
            res.status(500).send('Error inesperado');
        }
    },

    storetest: function(req, res) {
        // Obtener los errores de validación
        const errors = validationResult(req).array();
    
        // Obtener los errores de multer
        const multerError = req.multerValidationError;
        
        // Obtener el contenido del body
        const bodyContent = req.body;

        // Si hay errores de express validator o errores de multer, enviarlos a la vista
        if (errors.length > 0 || multerError) {
            const errorResponse = {
                errors: errors, // Errores de express validator
                multerError: multerError && multerError.message, // Error de multer si existe
                body: bodyContent // Contenido del body
            };
            return res.status(400).json(errorResponse);
        }

        // Si no hay errores, puedes manejar la lógica de creación del producto aquí
        // ...

        res.send('Producto creado exitosamente');
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
            
            res.redirect(`/products/detail/${productId}`); 
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
    },

    editDeprecated: function(req, res) {
        let productId = (productService.getBy(req.params.id));
        res.render('products/edit', {productId});
    },

    detailDeleteDeprecated: function(req, res) {
        let productId = req.params.id;
        let productDeleted = productService.delete(productId);
        if (productDeleted) {
            res.redirect('/products');
        } else {
            return res.status(404).send('Product not found');
        }    
    },

    formExtern: function(req, res) {
        res.render('products/create-form-extern');
    }

};

module.exports = productsControllers;