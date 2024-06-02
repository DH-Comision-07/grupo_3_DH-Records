'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
 
    static associate(models) {
      this.hasMany(models.Users, {
        as: 'users',
        foreignKey: 'categorias_id'
      });
    }
  }
  categorias.init({
    admin: DataTypes.STRING,
    usuario: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Categorias',
  });
  return categorias;
};