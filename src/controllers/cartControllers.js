const cartService = require('../models/db/services/cartService'); 

const cartController = {
    async viewCart(req, res) {
        try{
            if (!req.session.userLogged || !req.session.userLogged.id) {
                return res.redirect('/users/login');
            }                       

            const userId = req.session.userLogged.id;                        /* obtengo el id */

            const cartItems = await cartService.getCartItems(userId);       /* llamo a la función getCartItems del cartService y le paso el userId */
            res.render('products/cart', {cartItems});                       /* corchetes del cartItems =  envio en forma de objeto los datos, lo usamos en EJS  */
        } catch (error) {
            console.error('Error en el controlador al obtener el carrito:', error);
            res.status(500).send('Hubo un error al obtener el carrito Controller');
        }
    },

    async addToCart(req, res) {
        try {
            const userId = req.session.userLogged.id;
            const productId = req.params.productId;               
            
            await cartService.addToCart(userId, productId);
            res.redirect('/products/cart');

        } catch (error) {
            console.error('Error al añadir al carrito:', error);
            res.status(500).send('Hubo un error al añadir el producto al carrito');
        }
    },
};

module.exports = cartController;

