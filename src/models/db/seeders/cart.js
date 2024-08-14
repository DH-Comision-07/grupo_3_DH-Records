'use strict';

/** @type {import('sequelize-cli').Migration} */

function Cart(user_id, product_id, cantidad, precio_venta) {                /*  Constructor */
  this.user_id = user_id;
  this.product_id = product_id;
  this.cantidad = cantidad;
  this.precio_venta = precio_venta;    
}

module.exports = {
    async up(queryInterface, Sequelize) {
      let carts = [
        new Cart(1, 1, 2, 19.99),
        new Cart(2, 3, 1, 9.99),
        new Cart(3, 2, 4, 39.96),
        new Cart(4, 4, 1, 29.99),
        new Cart(5, 5, 3, 59.97)
      ];

      let cartsRegistro = carts.map(cart => ({
        user_id: cart.user_id,
        product_id: cart.product_id,
        cantidad: cart.cantidad,
        precio_venta: cart.precio_venta
      }));

      await queryInterface.bulkInsert('Cart', cartsRegistro, {});   /* queryInterface.bulkInsert. = insertar registros en una tabla llamada Cart */
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Cart', null, {});   /* Cart le dice que tabla eliminar , null = no hay condiciones para eliminar, asi que elimina todo, {} = opciones adicionales */
    }
};