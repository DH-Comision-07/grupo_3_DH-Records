const express = require('express');
const routes = express.Router();

const usersControllers = require('../controllers/usersControllers');


routes.get("/register", usersControllers.register);

routes.get("/login", usersControllers.login);   

routes.get("/detail/:id", usersControllers.detail);

routes.get("/", usersControllers.getAll);


module.exports = routes;


