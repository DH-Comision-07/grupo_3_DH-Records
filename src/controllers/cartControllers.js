const cartService = require('../services/cartService'); 

const cartController = {
    async viewCart(req, res) {
        try{
            const userId = req.session.userLogged.id                        /* obtengo el id */

            const cartItems = await cartService.getCartItems(userId);       /* llamo a la función getCartItems del cartService y le paso el userId */
            res.render('products/cart', {cartItems});                       /* corchetes del cartItems =  envio en forma de objeto los datos  */
        } catch (error) {
            res.status(500).send('Hubo un error al obtener el carrito');
        }
    }
}

module.exports = cartController;

