const express = require('express');
const routes = express.Router();

const usersControllers = require('../controllers/usersControllers');

//Validaciones de express-validator
const validacionesRegister = require('../middlewares/registerMid');
const validacionesLogin = require('../middlewares/loginMid');

//Validaciones de rutas segun usuario logueado
const userLoggedValidationMid = require('../middlewares/userLoggedValidationMid');
const userUnloggedValidationMid = require('../middlewares/userUnloggedValidationMid');
const multerMid = require('../middlewares/multerUsersMid');


//Formulario de registro
routes.get("/register", userLoggedValidationMid, usersControllers.register);
//Proceso de registro
routes.post("/register", validacionesRegister, usersControllers.processRegister);

//Formulario de logueo
routes.get("/login", userLoggedValidationMid, usersControllers.login); 
//Proceso de logueo
routes.post("/login", validacionesLogin, usersControllers.processLogin);  

//detalle del usuario. TODO:FIX: no se esta usando el id para nada
routes.get("/detail/:id", userUnloggedValidationMid, usersControllers.detail);

routes.post("/uploadProfilePicture/:id", multerMid.single('profilePicture'), usersControllers.edit);

//Cerrar sesion de usuario
routes.get("/logout", usersControllers.logOut);

//lista de usuarios, vista NO implementada aun
routes.get("/", usersControllers.getAll);





module.exports = routes;


