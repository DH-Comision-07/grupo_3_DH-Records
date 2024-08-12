// src/models/cart.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {

    static associate(models) {
      this.belongsTo(models.Users, {
        as: 'user',
        foreignKey: 'user_id'
      });

      this.belongsTo(models.Productos, {
        as: 'product',
        foreignKey: 'product_id'
      });
    }
  }
  Cart.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio_venta: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'Cart',
    timestamps: false
  });
  return Cart;
};