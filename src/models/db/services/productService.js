const path = require('path');
const fs = require('fs');

const products = require('../json/products.json');
let db = require('../models');
const { Op } = require('sequelize');

let productService = {

    //METODOS YA DESARROLLADOS Y PROBADOS PARA CRUD DB
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
            
            if (!id) {
                throw new Error("Invalid genre ID");
            }

            let productID = await db.Productos.findByPk(id, {
                include: [
                  { association: "generos" },
                  { association: "autores" },
                  { association: "imagenesProductos" }
                ]
            })
            //tengo que cambiar la fecha para que sea tipo DATE para despues mostrarla 
            //en el HTML, por eso la transformo en tipo DATE 
            if(productID && productID.release_date){
                productID.release_date = new Date(productID.release_date);
            }
            return productID;
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

    getProductsCountByGenre: async function() {
        try {
            return await db.Productos.findAll({
                include: [{ association: 'generos' }],
                attributes: [
                    [db.Sequelize.fn('COUNT', db.Sequelize.col('genero_id')), 'productos_por_genero']
                ],
                group: ['genero_id']
            });
        } catch (error) {
            console.log(error);
            return([]);
        }
    },

    applyFilters: async function (genero, autor, precioMin, precioMax) {
        try {
            let where = {};

            if(genero) {where.genero_id = genero;} 
            if (autor) {where.autor_id = autor;}
            if (precioMin || precioMax) {
                where.precio_venta = {
                    [Op.between]: [
                        //si no se especifica valor min se concidera cero
                        precioMin ? parseFloat(precioMin) : 0,
                        //si no se especifica valor max, se concidera el mayo valor maximo posible
                        precioMax ? parseFloat(precioMax) : Number.MAX_VALUE
                    ]
                };
            }

            let products = await db.Productos.findAll({
                include: [
                    { association: "generos" },
                    { association: "autores" },
                    { association: "imagenesProductos" }
                ],
                where: where
            });

            return products;
            
        } catch (error) {
            console.log(error);
            return([]);
        }
    },

    getByGenre: async function(id) {
        try {
            
            if (!id) {
                throw new Error("Invalid genre ID");
            }
    
            let products = await db.Productos.findAll({
                include: [
                    {association: "generos"},
                    {association: "autores"},
                    {association: "imagenesProductos"}
                ],
                where: {
                    genero_id: id,
                },
            });

            return products;

        } catch (error) {
            console.log(error);
            return([]);
        }
    },

    storeDB: async function(productData, imagen) {
        try {
            const { titulo, genero, descripcion, autor, precioCosto, precioVenta, releaseDate, estilo } = productData;
    
            const producto = await db.Productos.create({
                titulo: titulo,
                genero_id: genero,
                descripcion: descripcion,
                autor_id: autor, 
                precio_costo: precioCosto,
                precio_venta: precioVenta,
                release_date: releaseDate,
                estilo: estilo
            });
            if (imagen) {
                // Guardar la imagen en la tabla imagenes_productos
                await db.ImagenesProductos.create({
                    nombre: imagen.filename,
                    tipo: imagen.mimetype,
                    producto_id: producto.id
                });
            }
            return producto;
        } catch (error) {
            return ({});
        }
        
    },

    //METODOS EN DESARROLLO PARA EL CRUD DE DB
    updateDB: async function(productId, productData, imagen) {
        try {
            const { titulo, genero, descripcion, autor, precioCosto, precioVenta, releaseDate, estilo } = productData;
    
            await db.Productos.update({
                titulo: titulo,
                genero_id: genero,
                descripcion: descripcion,
                autor_id: autor,
                precio_costo: precioCosto,
                precio_venta: precioVenta,
                release_date: releaseDate,
                estilo: estilo
            }, { 
                where: { id: productId } 
            });
    
            //verifico si tengo q actualizar la imagen
            if (imagen) {
                //Obtengo la imagen asociada al producto
                let imagenProducto = await db.ImagenesProductos.findOne({ 
                    where: { 
                        producto_id: productId 
                    } 
                });
    
                //si el producto ya tinia imagen y la tengo q reescribir, primero la elimino
                if (imagenProducto) {
                    await imagenProducto.destroy({ 
                        where: { 
                            producto_id: productId 
                        } 
                    });
                }
    
                //y despues guardo la nueva imagen
                await db.ImagenesProductos.create({
                    nombre: imagen.filename,
                    tipo: imagen.mimetype,
                    producto_id: productId
                });
            }
    
        } catch (error) {
            return ({});
        }
    },

    delete: async function (productId) {
        try {
            //Obtengo la imagen asociada al producto
            let imagenProducto = await db.ImagenesProductos.findOne({ 
                where: { 
                    producto_id: productId 
                } 
            });

            //si el producto tiene imagen, la elimino
            if (imagenProducto) {
                await imagenProducto.destroy({ 
                    where: { 
                        producto_id: productId 
                    } 
                });
            };

            //por ultimo elimino el producto seleccionado
            await db.Productos.destroy({ 
                where: { 
                    id: productId 
                } 
            });

        } catch (error) {
            return ({});
        }                              
    },


    //METODOS ANTERIORMENTE UTILIZADOS PARA JSON
    products: products,

    deleteDeprecated: function (id) {
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
