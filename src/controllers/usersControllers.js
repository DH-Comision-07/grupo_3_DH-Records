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
        console.log(userLogin);
        //Si no encuentro usuario registrado vuelvo al Login y lo mando a registrarse
        if(!userLogin){
            return res.render('users/login', { errores:{email:{ msg: 'This email is not registered'}}, oldData: req.body });
        };
        
        //Si tengo un usuario registrado
        if(userLogin && userLogin.contraseña){
            //comparo la contraseña ingresada con la guardada en la DB
            let passwordMatch = userService.comparePassword(req.body.contraseña, userLogin.contraseña);
 
            //Si la contraseña coincide se loguea el usuario
            if(passwordMatch){
              // Crea una copia del objeto userLogin sin la contraseña
                let userLoginForSession = {...userLogin};
                delete userLoginForSession.contraseña;

                req.session.userLogged = userLoginForSession;

                if(req.body.rememberUser){
                    res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 * 30});
                }
                
                return res.redirect('/users/detail/:id') 
            } else {
                return res.render('users/login', { errores:{contraseña:{ msg: 'Incorrect password'}}, oldData: req.body });
            }
        }

        return res.redirect('/users/detail/:id') 
    },
    
    detail: function(req, res) {
        console.log("estas en el detalle de usuario");
        console.log(req.cookies.userEmail);
        return res.render('users/detail', { user: req.session.userLogged });
    },

    logOut: function(req, res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    getAll: function(req, res) {
        return res.render('users', {users: usersService.getAll()});
    },


    edit: function(req, res) {
        
        let userId = req.params.id;
        let newUserData = {};

        if (req.file) {
            newUserData.image = req.file.filename;
        }
    
        let userUpdated = userService.update(userId, newUserData);
    
        if (userUpdated) {
            return res.redirect('/users/detail/' + userId);
        } else {
            return res.redirect('/');
        }
    }


};

module.exports = usersControllers;

