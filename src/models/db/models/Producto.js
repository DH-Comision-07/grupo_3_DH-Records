/*'use strict';
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
*/

module.exports = (sequelize, DataTypes) => {

  let alias = "Productos";
  cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT
    },
    precio_costo: {
      type: DataTypes.DECIMA(8,2)
    },
    precio_venta: {
      type: DataTypes.DECIMA(8,2)
    },
    release_date: {
      type: DataTypes.DATE
    },
    estilo: {
      type: DataTypes.STRING
    } 
  };
  config = {
    tableName: 'productos',
    timestamps: false
  };
  let Producto = sequelize.define(alias, cols, config);

  Producto.associate = function(models){
    Producto.belongsto(models.Generos,{
      as: "generos",
      foreignKey: "genero_id"
    });

    Producto.belongsto(models.Autores, {
      as: "autores",
      foreignKey: "autor_id"
    }); 

    Producto.hasMany(models.Imagen_producto,{
      as: "imagenes",
      foreignKey: "producto_id"
    });
  }

  return Producto;
}