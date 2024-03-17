const path = require ('path');

let usersControllers = {

    register: function (req, res) {
        res.render('users/register');
    },

    login: function (req, res) {
        res.render('users/login2');
    },
    
    perfilUsuario: function (req, res) {
        res.render('users/perfil-usuario');
    }
}

module.exports = usersControllers;