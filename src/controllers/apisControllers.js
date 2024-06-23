const productService = require ('../models/db/services/productService');
const genreService = require ('../models/db/services/genreService');
const authorService = require ('../models/db/services/authorService');

let apisControllers = {
    listAll: async function(req, res) {
        //res.send("list all");
        try { //si todo sale bien
            let productsArray = await productService.getAll()
            let productsByGenre = await productService.getProductsCountByGenre();
             let response = {
                 status: 'success',
                 total: productsArray.length,
                 productsByGenre: productsByGenre,
                 products: productsArray
             };
            // console.log(productsArray);
            res.status(200).json(response);
        } catch (error) { //si sale mal
            res.status(500).json({
                status: 'error',
                message: 'An error occurred while fetching products',
                error: error
            });
        }
    },

    test: function(req, res) {
        res.send("test de apis");
    }
};

module.exports = apisControllers;