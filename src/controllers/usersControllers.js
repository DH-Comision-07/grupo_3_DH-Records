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
        res.render('users/login',{ errores: [], oldData: {} });
    },

    processLogin: function (req, res) {
        const errors=  validationResult(req);
     

        if(!errors.isEmpty()){
            return res.render('users/login', { errores: errors.mapped(), oldData: req.body });
        }

        let userLogin= userService.getByField('email', req.body.email);

        if(!userLogin){
            return res.render('users/login', { errores:{email:{ msg: 'This email is not registered'}}, oldData: req.body });
        };

        return res.redirect('/users/detail/:id') 
    },
    

    detail: function (req, res) {
        let userId = (usersService.getBy(req.params.id));
        res.render('users/detail', {userId});
    },

    getAll: function (req, res) {
        res.render('users', {users: usersService.getAll()});
    }
};

module.exports = usersControllers;

