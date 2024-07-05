'use strict';

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */

function Users(nombreUsuario, apellidoUsuario, email,contraseña,imagenUsuario,direccion,dni,terminosCondiciones,categorias_id){   // Constructor = creación de múltiples objetos de la misma clase(Users), pero con diferentes valores para sus propiedades
  this.nombreUsuario = nombreUsuario;
  this.apellidoUsuario = apellidoUsuario;                     //this = para asignar valores a las propiedades del objeto que se está creando.
  this.email = email;
  this.contraseña = bcryptjs.hashSync(contraseña, 10);          
  this.imagenUsuario = imagenUsuario;
  this.direccion = direccion;
  this.dni = dni;
  this.terminosCondiciones = terminosCondiciones;
  this.categorias_id = categorias_id;
}

module.exports = {
  async up (queryInterface, Sequelize) {
  
    let users = [
      new Users('Mariano','Gomez','marian@hotmail.com','12345678','defaultUserImage.png','Av.San Martin',38154978,0,1),     //new = operador para crear nuevos objetos.
      new Users('Dani','Perez','dani@hotmail.com','12345678','defaultUserImage.png','Av.Dominguez',38552976,0,2),
      new Users('Nico','Sosa','nico@hotmail.com','12345678','defaultUserImage.png','Av.Manuel Sosa',39134979,0,2),
      new Users('Juan','Berchia','juan@hotmail.com','12345678','defaultUserImage.png','Av.Santa Fe',39654951,0,2),
      new Users('Lucas','Piva','lucas@hotmail.com','12345678','defaultUserImage.png','Av. Mendez',38756674,0,2),
      new Users('Jaime','Rossi','jaime@hotmail.com','12345678','defaultUserImage.png','Av.San francisco',39166977,0,2)
    ]


    let usersRegistro = users.map(user => ({
      nombreUsuario: user.nombreUsuario,
      apellidoUsuario: user.apellidoUsuario,
      email: user.email,
      contraseña: user.contraseña,
      imagenUsuario: user.imagenUsuario,
      direccion: user.direccion,
      dni: user.dni,
      terminosCondiciones: user.terminosCondiciones,
      categorias_id: user.categorias_id
    }));

      await queryInterface.bulkInsert('users', usersRegistro, {});
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null , {});
  }
};
