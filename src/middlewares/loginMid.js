const { body } = require('express-validator');

const validacionesLogin= [
    body('usuario').notEmpty().withMessage('You must complete the user field'),
    body('contraseña').notEmpty().withMessage('You must complete the password field')
];

module.exports= validacionesLogin;