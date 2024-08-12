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
      productos.belongsTo(models.Generos, {
        as: "generos",
        foreignKey: "genero_id"
      });

      productos.belongsTo(models.Autores, {
        as: "autores",
        foreignKey: "autor_id"
      });

      productos.hasMany(models.ImagenesProductos, {
        as: "imagenesProductos",
        foreignKey: "producto_id"
      });

      productos.hasMany(models.Cart, {
        as: 'cart',
        foreignKey: 'product_id'
      });
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
    timestamps:false,
    modelName: 'Productos',
    //se genera un primer commit al cual regresar
  });
  return productos;
};