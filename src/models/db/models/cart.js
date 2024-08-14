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
    tableName: 'Cart',   /* sin esto me saltaba error porque no encontraba la tabla ya que Sequelize la hace en pluralización automática aunque no lo veas */
    timestamps: false
  });
  return Cart;
};