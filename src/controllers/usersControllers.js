const usersService = require('../models/db/services/usersService');
const { validationResult } = require('express-validator');
const multer = require('multer');
const bcryptjs= require('bcryptjs');
const userService = require('../models/db/services/usersService');


let usersControllers = {

    register: function (req, res) {
        return res.render('users/register',{ errores: [], oldData: {} });
    },

    processRegister: async function (req, res) {
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
            return res.render('users/register', { errores: errors.mapped(), oldData: req.body });
        }
        
        let userEmail= await userService.getByField('email', req.body.email);
    
        if(userEmail) {
            return res.render('users/register', { errores:{email:{ msg: 'This email is already registered'}}, oldData: req.body });
        }
    
        req.body.contraseña  = userService.hashPassword(req.body.contraseña);
    
        const newUser = await userService.createUser(req.body);
    
        usersService.createUser(req.body);
        
        return res.redirect('/users/login');
    },


    login: function (req, res) {
        return res.render('users/login',{ errores: [], oldData: {} });
    },

    processLogin: async function (req, res) {
        //Capturo los errores que envía express-validator
        const errors=  validationResult(req);
     
        //Si hay errores, errores no esta vacio, vuelvo al login con los errores
        if(!errors.isEmpty()){
            return res.render('users/login', { errores: errors.mapped(), oldData: req.body });
        }

        //Si pasa las validaciones y no hay errores busco en la DB el usuario que se corresponda con el email ingresado
        let userLogin=  await userService.getByField('email', req.body.email);
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
                
                return res.redirect('/users/' + userLogin.id) 
            } else {
                return res.render('users/login', { errores:{contraseña:{ msg: 'Incorrect password'}}, oldData: req.body });
            }
        }

        return res.redirect('/users/' + userLogin.id) 
    },

    logOut: function(req, res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    editImage: function(req, res) {
        let userId = req.params.id;
        let newUserData = {};

        if (req.file) {
            newUserData.image = req.file.filename;
        }
        let userUpdated = userService.updateImage(userId, newUserData);
    
        if (userUpdated) {
            res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
            return res.redirect('back');
        } else {
            return res.redirect('/');
        }
    },

    list: async function(req, res) {
        try {
            const users = await userService.getAll();
            res.render('users/users', { users });
        } catch (error) {
            res.render('users/users', { users: [], error: 'Hubo un error al obtener los usuarios' });
        }
    },

    edit: async function(req, res) {
        try {
            let user = await userService.getBy(req.params.id);
            const categoriasUsuario = await userService.getAllCategories();
           res.render('users/edit', {user, categoriasUsuario})
        } catch (error) {
            res.status(500).send('Error inesperado' + error.message);
        }
    },

    detail: async function(req, res) {
        try {
            let user = await userService.getBy(req.params.id);
            if (user) {
                res.render('users/detail', { user: user });
            } else {
                res.status(404).send('Usuario no encontrado');
            }
        } catch (error) {
            res.status(500).send('Error al obtener el usuario');
        }
    },

   update: async function(req, res) {
        try {
            await userService.update(req.params.id, req.body);
            res.redirect(`/users/${req.params.id}`)  // vista del detalle de la vista que edite
        } catch(error) {
            res.status(500).send('No se pudo editar');
        }
    },
    
    delete: async function(req, res) {
        try {
            await userService.deleteUser(req.params.id);
            res.redirect('/users');
        } catch (error){
            res.status(500).send('No se pudo eliminar el usuario');
        }
    }
    
}

module.exports = usersControllers;

