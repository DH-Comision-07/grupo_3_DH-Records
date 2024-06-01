'use strict';

/** @type {import('sequelize-cli').Migration} */

 function Productos(titulo,genero_id,descripcion,autor_id,precio_costo,precio_venta,release_date,estilo){
  this.titulo = titulo;
  this.genero_id = genero_id;
  this.descripcion = descripcion;
  this.autor_id = autor_id;
  this.precio_costo = precio_costo;
  this.precio_venta = precio_venta;
  this.release_date = release_date;
  this.estilo = estilo;
  this.createdAt = new Date();
  this.updatedAt = new Date();
 }            


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Productos', [
      new Productos('titulo1', 1, 'descripcion1', 1, 100, 200, new Date(), 'estilo1'),
      new Productos('titulo2', 2, 'descripcion2', 2, 200, 300, new Date(), 'estilo2')
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {});
  }
};
