'use strict';

/** @type {import('sequelize-cli').Migration} */

function Generos(nombre){
  this.nombre = nombre;
}

module.exports = {
  async up (queryInterface, Sequelize) {
   
    let generos = [
      new Generos('pop'),
      new Generos('rock'),
      new Generos('hip-hop'),
      new Generos('electrónica'),
      new Generos('reggaeton'),
      new Generos('indie'),
      new Generos('country'),
      new Generos('jazz'),
      new Generos('metal'),
      new Generos('clásica'),
      new Generos('rock nacional'),
      new Generos('blues'),
      new Generos('punk'),
      new Generos('reggae'),
      new Generos('soul')
    ]

    let generosRegistro = generos.map(genero => ({
      nombre: genero.nombre
    }));

      await queryInterface.bulkInsert('generos', generosRegistro, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('generos', null , {});
  }
};
