const express = require('express');
const routes = express.Router();

const usersControllers = require('../controllers/usersControllers');

//Validaciones de express-validator
const validacionesRegister = require('../middlewares/registerMid');
const validacionesLogin = require('../middlewares/loginMid');


routes.get("/register", usersControllers.register);
routes.post("/register", validacionesRegister, usersControllers.processRegister);

routes.get("/login", usersControllers.login); 
routes.post("/login", validacionesLogin, usersControllers.processLogin);  

routes.get("/detail/:id", usersControllers.detail);

routes.get("/", usersControllers.getAll);


module.exports = routes;


