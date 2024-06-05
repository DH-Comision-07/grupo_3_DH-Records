'use strict';

/** @type {import('sequelize-cli').Migration} */

function ImagenesProductos(nombre,tipo,producto_id){
  this.nombre = nombre;
  this.tipo = tipo;
  this.producto_id = producto_id;
}

module.exports = {
  async up (queryInterface, Sequelize) {
   
    let imagenes_productos = [
      new ImagenesProductos('imagen-1712231620361.jpg', 'jpg', 1),
      new ImagenesProductos('imagen-1712231723306.png', 'png', 2),
      new ImagenesProductos('imagen-1712231816033.png', 'png', 3),
      new ImagenesProductos('imagen-1712231885555.jpg', 'jpg', 4),
      new ImagenesProductos('imagen-1712231969140.jpg', 'jpg', 5),
      new ImagenesProductos('imagen-1712232037398.jpg', 'jpg', 6),
      new ImagenesProductos('imagen-1712232099852.png', 'png', 7),
      new ImagenesProductos('imagen-1712232176060.jpg', 'jpg', 8),
      new ImagenesProductos('imagen-1712232233566.jpg', 'jpg', 9),
      new ImagenesProductos('imagen-1712232293259.png', 'png', 10)
    ]

    let imagenesProductosRegistro = imagenes_productos.map(imagen => ({
      nombre: imagen.nombre,
      tipo: imagen.tipo,
      producto_id: imagen.producto_id
    }));

      await queryInterface.bulkInsert('imagenes_productos', imagenesProductosRegistro, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('imagenes_productos', null , {});
  }
};
