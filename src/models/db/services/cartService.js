const {Cart, Productos, Users} = require('../models'); 

const cartService = {
    async getCartItems(userId) {
        try{
            if (!userId) {
                throw new Error('userId is required');
            }
            const cartItems = await Cart.findAll({
                where: {user_id: userId},                       /* la fk coincide con el id  ( where metodo de Sequelize) */
                include: [                                      /* include = permite incluir datos de otras tablas en los resultados de una consulta (tamb de Sequelize) */
                    {model:Productos, as: 'product'},
                    {model:Users, as: 'user'}                   /* incluye tabla Users a través del alias 'user' */
                ]
            });
            return cartItems;

        } catch (error) {
            console.error('Error en el servicio al obtener el carrito:', error.message);
            throw error; // Lanzar el error para que sea manejado en el controlador
        }
    }
};

module.exports = cartService;