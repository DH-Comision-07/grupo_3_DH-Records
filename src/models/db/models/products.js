'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    titulo: DataTypes.STRING,
    generoDisco: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    autor: DataTypes.STRING,
    discografica: DataTypes.STRING,
    precioCosto: DataTypes.INTEGER,
    precioMostrador: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    anio: DataTypes.INTEGER,
    estilo: DataTypes.STRING,
    canciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};