const { body } = require('express-validator');

const validacionesLogin= [
    body('usuario').notEmpty().withMessage('Debes completar el campo usuario'),
    body('contraseña').notEmpty().withMessage('Debes completar el campo contraseña')
];

module.exports= validacionesLogin;