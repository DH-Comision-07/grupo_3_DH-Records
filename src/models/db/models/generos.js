'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class generos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      generos.hasMany(models.Productos, {
        as: "productos",
        foreignKey: "genero_id"
      });
    }
  }
  generos.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Generos',
  });
  return generos;
};

