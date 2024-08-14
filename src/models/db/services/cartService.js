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
            console.log('Cart Items:', cartItems); 
            return cartItems;

        } catch (error) {
            console.error('Error en el servicio al obtener el carrito:', error.message);
            throw error; // Lanzar el error para que sea manejado en el controlador
        }
    },

    async addToCart(userId, productId) {
        try {
            if (!userId || !productId) {
                throw new Error('userId and productId are required');
            }
            const product = await Productos.findByPk(productId);
            if (!product) {
                throw new Error('Product not found');
            }
    
            await Cart.create({
                user_id: userId,
                product_id: productId,
                cantidad: 1, 
                precio_venta: product.precio_venta
            });
        } catch (error) {
            console.error('Error en el servicio al añadir al carrito:', error.message);
            throw error;
        }
    }
};

module.exports = cartService;