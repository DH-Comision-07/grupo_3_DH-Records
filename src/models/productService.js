const path = require('path');
const fs = require('fs');

const products = require('./products.json');

let productService = {

    products: products,

    getAll: function() {
        return this.products;
    },

    getBy: function(id) {
        return this.products.find(product => product.id == id);
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
            imagen: imagen ? path.relative(__dirname, imagen.path) : null
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
