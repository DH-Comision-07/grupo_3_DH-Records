const usersService = require('../models/usersService');
const { validationResult } = require('express-validator');
const bcryptjs= require('bcryptjs');
const userService = require('../models/usersService');


let usersControllers = {

    register: function (req, res) {
        return res.render('users/register',{ errores: [], oldData: {} });
    },

    processRegister: function (req, res) {
        const errors = validationResult(req);
        
        let userEmail= userService.getByField('email', req.body.email);
    
        if(userEmail) {
            res.render('users/register', { errores:{email:{ msg: 'This email is already registered'}}, oldData: req.body });
        }

        if (!errors.isEmpty()) {
            res.render('users/register', { errores: errors.mapped(), oldData: req.body });
        } else {
            req.body.contraseña = userService.hashPassword(req.body.contraseña);
            usersService.create(req.body);
            return res.redirect('/users/login');
        };

    },  


    login: function (req, res) {
        return res.render('users/login',{ errores: [], oldData: {} });
    },

    processLogin: function (req, res) {
        //Capturo los errores que envía express-validator
        const errors=  validationResult(req);
     
        //Si hay errores, errores no esta vacio, vuelvo al login con los errores
        if(!errors.isEmpty()){
            return res.render('users/login', { errores: errors.mapped(), oldData: req.body });
        }

        //Si pasa las validaciones y no hay errores busco en la DB el usuario que se corresponda con el email ingresado
        let userLogin= userService.getByField('email', req.body.email);
        //Si no encuentro usuario registrada vuelvo al Login y lo mando a registrarse
        if(!userLogin){
            return res.render('users/login', { errores:{email:{ msg: 'This email is not registered'}}, oldData: req.body });
        };

        //Si tengo un usuario registrado
        if(userLogin && userLogin.contraseña){
            //comparo la contraseña ingresada con la guardada en la DB
            let passwordMatch = userService.comparePassword(req.body.contraseña, userLogin.contraseña);

            //Si la contraseña coincide se loguea el usuario
            if(passwordMatch){
                delete userLogin.contraseña;
                req.session.userLogged = userLogin;
                return res.redirect('/users/detail/:id') 
            } else {
                return res.render('users/login', { errores:{contraseña:{ msg: 'Incorrect password'}}, oldData: req.body });
            }
        }

        return res.redirect('/users/detail/:id') 
    },
    
    detail: function (req, res) {
        console.log("estas en el detalle de usuario");
        console.log(req.session);
        return res.render('users/detail', { user: req.session.userLogged });
    },

    logOut: function (req, res) {
        req.session.destroy();
        return res.redirect('/');
    },

    getAll: function (req, res) {
        return res.render('users', {users: usersService.getAll()});
    }
};

module.exports = usersControllers;

