const express = require('express');
const routes = express.Router();
const path = require ('path');

const usersControllers = require('../controllers/usersControllers');


routes.get("/register", usersControllers.register);

routes.get("/login", usersControllers.login);   

routes.get("/perfil-usuario", usersControllers.perfilUsuario);

module.exports = routes;


