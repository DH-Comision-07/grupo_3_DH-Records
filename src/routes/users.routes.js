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
routes.get("/login", usersControllers.login);   //userLoggedValidationMid
//Proceso de logueo
routes.post("/login", validacionesLogin, usersControllers.processLogin);  

routes.post("/uploadProfilePicture/:id", multerMid.single('profilePicture'), usersControllers.editImage);

//Cerrar sesion de usuario
routes.get("/logout", usersControllers.logOut);

routes.get("/", usersControllers.list);

routes.get("/edit/:id", usersControllers.edit);

routes.get("/:id", userUnloggedValidationMid, usersControllers.detail);

routes.put('/:id', multerMid.single('profilePicture'), usersControllers.update);

routes.delete('/:id', usersControllers.delete);







module.exports = routes;


