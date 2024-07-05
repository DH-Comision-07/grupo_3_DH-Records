'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreUsuario: {
        type: Sequelize.STRING
      },
      apellidoUsuario: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.STRING
      },
      imagenUsuario: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.INTEGER
      },
      terminosCondiciones: {
        type: Sequelize.BOOLEAN
      },
      categorias_id: {
        type: Sequelize.INTEGER,  
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};