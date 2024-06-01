'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      categoria.hasMany(models.Users,{
        as:'users',
        foreignKey:'categoriaId'
      });
    }
  }
  categoria.init({
    Usuario: DataTypes.STRING,
    Admin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categoria',
  });
  return categoria;
};