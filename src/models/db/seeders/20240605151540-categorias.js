'use strict';

/** @type {import('sequelize-cli').Migration} */


function Categorias(categorias){
  this.categorias = categorias;
}

module.exports = {
  async up (queryInterface, Sequelize) {
  
      let categorias = [
        new Categorias('Admin'),
        new Categorias('Usuario'),
      ]


      let categoriasRegistro = categorias.map(categoria => ({
        categorias: categoria.categorias
      }));
  
        await queryInterface.bulkInsert('categorias', categoriasRegistro, {});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null , {});
  }
};
