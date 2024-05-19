const path = require('path');
const fs = require('fs');

const products = require('../json/products.json');
let db = require('../models');

let productService = {

    products: products,

    getAll: async function() {
        try {
            return await db.Productos.findAll({
                include: [
                    {association: "generos"},
                    {association: "autores"},
                    {association: "imagenesProductos"}
                ]
            })
        } catch (error) {
            console.log(error);
            return([]);
        }
    },

    getBy: async function(id) {
        try {
            return await db.Productos.findByPk(id, {
                include: [
                  { association: "generos" },
                  { association: "autores" },
                  { association: "imagenesProductos" }
                ]
            })
            //return this.products.find(product => product.id == id);
        } catch (error) {
            console.log(error);
            return {
                id: 0, 
                titulo: '-',
                descripcion: '-',
                precio_costo: '-',
                precio_venta: '-',
                release_date: '-',
                estilo: '-'
            }
        }
    },

    delete: function (id) {
        const initialLength = this.products.length;
        this.products = this.products.filter(product => product.id != id);                          //filter no modifica el array ooriginal por eso el this.products=
          
        if (this.products.length < initialLength) {
           fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(this.products)) ;
            return true;
        } else {
            return false;
        }                                 
    },
    
    store: function(productData, imagen) {
        const initialLength = this.products.length;
       
        let lastId = 0;
        for (let existingProduct of this.products) {
            if (existingProduct.id > lastId) {
                lastId = existingProduct.id;
            }
        }
        
        const newProduct = {
            id: lastId + 1,
            titulo: productData.titulo,
            generoDisco: productData.generoDisco,
            descripcion: productData.descripcion,
            autor: productData.autor,
            discografica: productData.discografica,
            precioCosto: productData.precioCosto,
            precioMostrador: productData.precioMostrador,
            stock: productData.stock,
            anio: productData.anio,
            estilo: productData.estilo,
            canciones: productData.canciones,
            // Almacena la ruta de la imagen ???
            imagen: imagen ? imagen.filename : null
        };
        
        this.products.push(newProduct);
        
        if (this.products.length > initialLength) {
            fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(this.products));
            return true;
        } else {
            return false;
        }
    }
}

module.exports = productService;
