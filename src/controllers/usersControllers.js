const usersService = require('../models/usersService');
const { validationResult } = require('express-validator');


let usersControllers = {

    register: function (req, res) {
        return res.render('users/register',{ errores: [], oldData: {} });
    },

    processRegister: function (req, res) {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            res.render('users/register', { errores: errors.mapped(), oldData: req.body });
        } else {
             return res.redirect('/users/login');
        };
    },


    login: function (req, res) {
        res.render('users/login',{ errores: [], oldData: {} });
    },

    processLogin: function (req, res) {
       const errors=  validationResult(req);

       if(!errors.isEmpty()){
        res.render('users/login', { errores: errors.mapped(), oldData: req.body });
       } else{
            return res.redirect('/users/detail/:id')
       }
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