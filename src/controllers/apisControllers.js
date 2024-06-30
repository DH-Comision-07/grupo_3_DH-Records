const productService = require ('../models/db/services/productService');
const genreService = require ('../models/db/services/genreService');
const authorService = require ('../models/db/services/authorService');

let apisControllers = {
    listAll: async function(req, res) {
        try { //si todo sale bien
            let productsArray = await productService.getAll()
            let productsByGenre = await productService.countByGenre();
            let response = {
                 status: 'exito',
                 total: productsArray.length,
                 productsByGenre: productsByGenre,
                 products: productsArray
             };
            res.status(200).json(response);
        } catch (error) { //si sale mal
            res.status(500).json({
                status: 'error',
                error: error
            });
        }
    },

    detail: async function(req, res) {
        try { //si todo sale bien
            let productId = await productService.getBy(req.params.id);
            let response = {
                status: 'exito',
                product: productId
            };
           res.status(200).json(response);
        } catch (error) { //si sale mal
            res.status(500).json({
                status: 'error',
                error: error
            });
        }
    },

    test: function(req, res) {
        res.send("test de apis");
    }
};

module.exports = apisControllers;