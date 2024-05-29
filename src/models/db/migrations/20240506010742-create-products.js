'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      generoDisco: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      },
      discografica: {
        type: Sequelize.STRING
      },
      precioCosto: {
        type: Sequelize.INTEGER
      },
      precioMostrador: {
        type: Sequelize.INTEGER
      },
      stock: {
        type: Sequelize.INTEGER
      },
      anio: {
        type: Sequelize.INTEGER
      },
      estilo: {
        type: Sequelize.STRING
      },
      canciones: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};