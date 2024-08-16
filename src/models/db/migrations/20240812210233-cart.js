'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Cart',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: Sequelize.INTEGER,
    },
    precio_venta: {
      type: Sequelize.DECIMAL,
    }
  
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Cart');
  }
};
