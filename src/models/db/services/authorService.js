
let db = require('../models');

let authorService = {
    getAll: async function() {
        try {
            return await db.Autores.findAll()
        } catch (error) {
            console.log(error);
            return([]);
        }
    }
}

module.exports = authorService;