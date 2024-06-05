'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagenes_productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      imagenes_productos.belongsTo(models.Productos, {
        as: "productos",
        foreignKey: "producto_id"
      });
    }
  }
  imagenes_productos.init({           // init es ES6 mas nuevo que el define
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    producto_id: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:false,
    modelName: 'ImagenesProductos',
    tableName: 'imagenes_productos'
  });
  return imagenes_productos;
};