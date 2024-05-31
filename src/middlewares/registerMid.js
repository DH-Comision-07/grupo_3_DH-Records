const { body } = require('express-validator');


const validacionesRegister = [
    body('nombreUsuario')
    .notEmpty().withMessage('You must complete the username field')
    .isLength({min: 2}).withMessage('It must have at least 2 characters'),

    body('email')
        .notEmpty().withMessage('You must complete the email field').bail()
        .isEmail().withMessage('You must complete the email field with a valid format'),

    body('contraseña')
    .notEmpty().withMessage('You must complete the password field')
    .isLength({min: 8}).withMessage('It must have at least 8 characters'),

];

module.exports= validacionesRegister;