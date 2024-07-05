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
  Users.init({                                      // init = metodo de Sequelize, vincula la db con tu Sequelize para que pueda leer la db ( sin el por mas que tengas data en la db no podrias ver ni interactuar con ella a través de Sequelize)
    nombreUsuario: DataTypes.STRING,
    apellidoUsuario: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    imagenUsuario: DataTypes.STRING,
    direccion: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    terminosCondiciones: DataTypes.BOOLEAN,
    categorias_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
    timestamps: false
  });
  return Users;
};
