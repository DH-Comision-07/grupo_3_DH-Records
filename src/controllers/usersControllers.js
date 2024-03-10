const path = require ('path');

let usersControllers = {

    register: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/register.html'));
    },

    login: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/login.html'));
    },
    
    perfilUsuario: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/perfil-usuario.html'));
    }

}

module.exports = usersControllers;