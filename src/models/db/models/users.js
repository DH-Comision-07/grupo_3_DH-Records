'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
   

    static associate(models) {
      this.belongsToMany(models.Products,{
        as: 'products',
        through: 'users_products',
        foreignKey: 'usersId'
      });
      
    }
  }
  Users.init({
    nombreUsuario: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    terminosCondiciones: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};