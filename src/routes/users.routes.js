const express = require('express');
const routes = express.Router();

const usersControllers = require('../controllers/usersControllers');

//Validaciones de express-validator
const validacionesRegister = require('../middlewares/registerMid');
const validacionesLogin = require('../middlewares/loginMid');

//Validaciones de rutas segun usuario logueado
const userLoggedMid = require('../middlewares/userLoggedMid');
const userUnloggedMid = require('../middlewares/userUnloggedMid');


//Formulario de registro
routes.get("/register", userLoggedMid, usersControllers.register);
//Proceso de registro
routes.post("/register", validacionesRegister, usersControllers.processRegister);

//Formulario de logueo
routes.get("/login", userLoggedMid, usersControllers.login); 
//Proceso de logueo
routes.post("/login", validacionesLogin, usersControllers.processLogin);  

//detalle del usuario. TODO:FIX: no se esta usando el id para nada
routes.get("/detail/:id", userUnloggedMid, usersControllers.detail);

//lista de usuarios, vista NO implementada aun
routes.get("/", usersControllers.getAll);


module.exports = routes;


