'use strict';

/** @type {import('sequelize-cli').Migration} */

function Autores(nombre){
  this.nombre = nombre;
}

module.exports = {
  async up (queryInterface, Sequelize) {
   
    let autores = [
      new Autores('The Beatles'),
      new Autores('Michael Jackson'),
      new Autores('Pink Floyd'),
      new Autores('Eagles'),
      new Autores('AC/DC'),
      new Autores('Nirvana'),
      new Autores('Fleetwood Mac'),
      new Autores('Led Zeppelin'),
      new Autores('Pink Floyd')
    ]

    let autoresRegistro = autores.map(autor => ({
      nombre: autor.nombre
    }));

      await queryInterface.bulkInsert('autores', autoresRegistro, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('autores', null , {});
  }
};
