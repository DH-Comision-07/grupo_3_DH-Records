'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagen_producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  imagen_producto.init({
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    producto_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'imagen_producto',
  });
  return imagen_producto;
};