const { body } = require('express-validator');


const validacionesRegister = [
    body('nombreUsuario').notEmpty().withMessage('You must complete the username field'),
    body('email')
        .notEmpty().withMessage('You must complete the email field').bail()
        .isEmail().withMessage('You must complete the email field with a valid format'),
    body('contraseña').notEmpty().withMessage('You must complete the password field')

];

module.exports= validacionesRegister;