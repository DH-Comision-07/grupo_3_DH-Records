
let db = require('../models');

let genreService = {
    getAll: async function() {
        try {
            return await db.Generos.findAll()
        } catch (error) {
            console.log(error);
            return([]);
        }
    }
}

module.exports = genreService;
