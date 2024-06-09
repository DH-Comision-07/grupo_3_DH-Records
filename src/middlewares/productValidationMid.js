const { body } = require('express-validator');

const productValidationMid= [
    body('titulo')
        //- Obligatorio
        .notEmpty().withMessage('El producto debe tener un titulo').bail()
        //- Deberá tener al menos 5 caracteres.
        .isLength({ min: 5 }).withMessage('El título debe tener al menos 5 caracteres'),
    body('descripcion')
        //Deberá tener al menos 20 caracteres.
        .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
];

module.exports= productValidationMid;