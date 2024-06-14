'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {
      this.belongsTo(models.Categorias,{
        as: 'categorias',
        foreignKey: 'categorias_id'
        })
    }
  }
  Users.init({
    nombreUsuario: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    imagenUsuario: DataTypes.STRING,
    terminosCondiciones: DataTypes.BOOLEAN,
    categorias_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
    timestamps: false
  });
  return Users;
};
