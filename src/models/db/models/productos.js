'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productos.init({
    titulo: DataTypes.STRING,
    genero_id: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    autor_id: DataTypes.INTEGER,
    precio_costo: DataTypes.DECIMAL,
    precio_venta: DataTypes.DECIMAL,
    release_date: DataTypes.DATE,
    estilo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productos',
  });
  return productos;
};