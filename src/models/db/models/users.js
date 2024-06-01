'use strict';
const { Model } = require('sequelize');
const categoria = require('./categoria');

module.exports = (sequelize, DataTypes) => {
class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsTo(models.categoria, {
        as: 'categoria',
        foreignKey: 'categoriaId'
      })
    }
  }
  Users.init({
    nombreUsuario: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    terminosCondiciones: DataTypes.BOOLEAN,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
    timestamps: true
  });
  return Users;
};
