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
      imagen_producto.belongsTo(models.Productos, {
        as: "productos",
        foreignKey: "producto_id"
      });
    }
  }
  imagen_producto.init({           // init es ES6 mas nuevo que el define
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    producto_id: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:false,
    modelName: 'ImagenesProductos',
    tableName: 'imagenes_productos'
  });
  return imagen_producto;
};