'use strict';

/** @type {import('sequelize-cli').Migration} */

function Productos(titulo,genero_id,descripcion,autor_id,precio_costo,precio_venta,release_date,estilo){
  this.titulo = titulo;
  this.genero_id = genero_id;
  this.descripcion = descripcion;
  this.autor_id = autor_id;
  this.precio_costo = precio_costo;
  this.precio_venta = precio_venta;
  this.release_date = release_date;
  this.estilo = estilo;
}

module.exports = {
  async up (queryInterface, Sequelize) {
   
    let productos = [
      new Productos('Abbey Road', 1, 'Abbey Road es el undécimo álbum de estudio de la banda británica de rock The Beatles. Fue lanzado en 1969 y es uno de los álbumes más icónicos de la historia de la música.', 1, 1599, 2999, '1969-01-01', 'rock,pop'),
      new Productos('Thriller', 1, 'Thriller es el sexto álbum de estudio del cantante estadounidense Michael Jackson, lanzado en 1982. Es el álbum más vendido de todos los tiempos.', 2, 1250, 2499, '1982-01-01', 'pop'),
      new Productos('The Dark Side of the Moon', 2, 'The Dark Side of the Moon es el octavo álbum de estudio de la banda británica de rock Pink Floyd, lanzado en 1973. Es uno de los álbumes más influyentes en la historia del rock.', 3, 1875, 3499, '1973-01-01', 'rock'),
      new Productos('Hotel California', 2, 'Hotel California es el quinto álbum de estudio de la banda de rock Eagles, lanzado en 1976. Es uno de los álbumes más vendidos de todos los tiempos y contiene el icónico sencillo homónimo', 4, 1425, 2799, '1976-01-01', 'rock'),
      new Productos('Back in Black', 2, 'Back in Black es el séptimo álbum de estudio de la banda de rock AC/DC, lanzado en 1980. Es uno de los álbumes más vendidos de la historia y es conocido por su energía y fuerza.', 5, 1350, 2699, '1980-01-01', 'rock'),
      new Productos('Nevermind', 2, 'Nevermind es el segundo álbum de estudio de la banda estadounidense Nirvana, lanzado en 1991. Es considerado uno de los álbumes más influyentes de la década de 1990 y ayudó a popularizar el género grunge.', 6, 1600, 3099, '1991-01-01', 'rock'),
      new Productos('Rumours', 2, 'Rumours es el undécimo álbum de estudio de la banda británico-estadounidense Fleetwood Mac, lanzado en 1977. Es uno de los álbumes más exitosos de la historia y contiene varios sencillos populares.', 7, 1475, 2899, '1977-01-01', 'rock'),
      new Productos('Sgt. Pepper Lonely Hearts Club Band', 1, 'Sgt. Pepper Lonely Hearts Club Band es el octavo álbum de estudio de The Beatles, lanzado en 1967. Es considerado uno de los álbumes más influyentes de todos los tiempos y ayudó a definir el género del rock psicodélico.', 1, 1650, 3199, '1967-01-01', 'rock'),
      new Productos('Led Zeppelin IV', 2, 'Led Zeppelin IV es el cuarto álbum de estudio de la banda británica de rock Led Zeppelin, lanzado en 1971. Es uno de los álbumes más vendidos de la historia y contiene clásicos como Stairway to Heaven.', 8, 1725, 3299, '1971-01-01', 'rock'),
      new Productos('The Wall', 2, 'The Wall es el undécimo álbum de estudio de la banda británica de rock Pink Floyd, lanzado en 1979. Es un álbum conceptual que trata sobre temas como el aislamiento y la alienación.', 3, 1900, 3599, '1979-01-01', 'rock')
    ]

    let productosRegistro = productos.map(producto => ({
      titulo: producto.titulo,
      genero_id: producto.genero_id,
      descripcion: producto.descripcion,
      autor_id: producto.autor_id,
      precio_costo: producto.precio_costo,
      precio_venta: producto.precio_venta,
      release_date: producto.release_date,
      estilo: producto.estilo
    }));

      await queryInterface.bulkInsert('productos', productosRegistro, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null , {});
  }
};
