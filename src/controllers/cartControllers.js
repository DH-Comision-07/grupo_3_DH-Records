const cartService = require('../models/db/services/cartService'); 

const cartController = {
    async viewCart(req, res) {
        try{
            if (!res.locals.userLogged || !res.locals.userLogged.id) {
                return res.redirect('/users/login');
            }                       

            const userId = res.locals.userLogged.id;                        /* obtengo el id */

            const cartItems = await cartService.getCartItems(userId);       /* llamo a la función getCartItems del cartService y le paso el userId */
            res.render('products/cart', {cartItems});                       /* corchetes del cartItems =  envio en forma de objeto los datos, lo usamos en EJS  */
        } catch (error) {
            console.error('Error en el controlador al obtener el carrito:', error);
            res.status(500).send('Hubo un error al obtener el carrito Controller');
        }
    },

    async addToCart(req, res) {
        try {

            const userId = res.locals.userLogged.id;
            //const userId = req.session.userLogged.dataValues.id;
            const productId = req.params.productId;               

            await cartService.addToCart(userId, productId);
            res.redirect('/products/cart');

        } catch (error) {
            console.error('Error al añadir al carrito:', error);
            res.status(500).send('Hubo un error al añadir el producto al carrito');
        }
    },

    async deleteCartItem(req,res){
        try{
            const productId = req.params.productId;         /* es productId porque asi lo defini en su ruta = /cart/:productId */
            await cartService.deleteCartItem(productId);
            res.redirect('/products/cart');
        }catch (error) {
            console.error('Error al eliminar del carrito:', error);
            res.status(500).send('Hubo un error al eliminar el producto del carrito');
        }
    }


};

module.exports = cartController;

