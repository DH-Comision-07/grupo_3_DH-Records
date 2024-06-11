'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class autores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      autores.hasMany(models.Productos,{
        as: "productos",
        foreignKey: "autor_id"
      });
    }
  }
  autores.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Autores',
  });
  return autores;
};