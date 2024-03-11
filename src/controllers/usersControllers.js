const path = require ('path');

let usersControllers = {

    register: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/register.ejs'));
    },

    login: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/login.ejs'));
    },
    
    perfilUsuario: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/perfil-usuario.ejs'));
    }

}

module.exports = usersControllers;