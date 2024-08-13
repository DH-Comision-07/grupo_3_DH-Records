const {Cart, Productos, Users} = require('../database/models'); 

const cartService = {
    async getCartItems(req, res) {
        try{
            const cartItems = await Cart.findAll({
                where: {user_id: userId},                       /* la fk coincide con el id  ( where metodo de Sequelize) */
                include: [                                      /* include = permite incluir datos de otras tablas en los resultados de una consulta (tamb de Sequelize) */
                    {model:Productos, as: 'product'},
                    {model:Users, as: 'user'}                   /* incluye tabla Users a través del alias 'user' */
                ]
            });
            return cartItems;

        } catch (error) {
            console.error(error);
            res.status(500).send('Hubo un error al obtener el carrito');
        }
    }
};

module.exports = cartService;