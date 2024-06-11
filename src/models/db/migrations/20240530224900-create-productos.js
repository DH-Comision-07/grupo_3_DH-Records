'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      genero_id: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      autor_id: {
        type: Sequelize.INTEGER
      },
      precio_costo: {
        type: Sequelize.DECIMAL
      },
      precio_venta: {
        type: Sequelize.DECIMAL
      },
      release_date: {
        type: Sequelize.DATE
      },
      estilo: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productos');
  }
};