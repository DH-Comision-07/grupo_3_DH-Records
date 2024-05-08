'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
   
    static associate(models) {
      this.belongsToMany(models.Users, {
        as: 'users',
        through: 'users_products',
        foreignKey: 'productsId'
      });
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