const express = require('express');
const routes = express.Router();
const path = require ('path');



routes.get("/register", (req,res) => res.sendFile(path.resolve(__dirname, '../views/users/register.html')));

routes.get("/login", (req,res) => res.sendFile(path.resolve(__dirname, '../views/users/login.html')));

routes.get("/perfil-usuario", (req,res) => res.sendFile(path.resolve(__dirname, '../views/users/perfil-usuario.html')));

module.exports = routes;


