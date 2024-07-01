'use strict';

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */

function Users(nombreUsuario,email,contraseña,imagenUsuario,terminosCondiciones,categorias_id){
  this.nombreUsuario = nombreUsuario;
  this.email = email;
  this.contraseña = bcryptjs.hashSync(contraseña,10);
  this.imagenUsuario = imagenUsuario;
  this.terminosCondiciones = terminosCondiciones;
  this.categorias_id = categorias_id;
}

module.exports = {
  async up (queryInterface, Sequelize) {
  
    let users = [
      new Users('Mariano','marian@hotmail.com','12345678','userProfile-1718577395048.jpg',0,1),
      new Users('Dani','dani@hotmail.com','12345678','userProfile-1718637185571.jpg',0,2),
      new Users('Nico','nico@hotmail.com','12345678','userProfile-1718577395048.jpg',0,2),
      new Users('Juan','juan@hotmail.com','12345678','userProfile-1718637185571.jpg',0,2),
      new Users('Lucas','lucas@hotmail.com','12345678','userProfile-1718577395048.jpg',0,2),
      new Users('Jaime','jaime@hotmail.com','12345678','userProfile-1718637185571.jpg',0,2)
    ]


    let usersRegistro = users.map(user => ({
      nombreUsuario: user.nombreUsuario,
      email: user.email,
      contraseña: user.contraseña,
      imagenUsuario: user.imagenUsuario,
      terminosCondiciones: user.terminosCondiciones,
      categorias_id: user.categorias_id
    }));

      await queryInterface.bulkInsert('users', usersRegistro, {});
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null , {});
  }
};
