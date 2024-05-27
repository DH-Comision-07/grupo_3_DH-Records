
let db = require('../models');

let authorService = {
    getAll: async function() {
        try {
            return await db.Autores.findAll()
        } catch (error) {
            console.log(error);
            return([]);
        }
    },

    storeDB: async function(nombre) {
        try {
            const author = await db.Autores.create({
                nombre: nombre
            });

            return author;

        } catch (error) {

            return ({});
        }
        
    }
}

module.exports = authorService;