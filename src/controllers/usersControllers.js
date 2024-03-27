const userService = require('../models/usersService');

let usersControllers = {

    register: function (req, res) {
        res.render('users/register');
    },

    login: function (req, res) {
        res.render('users/login');
    },
    
    detail: function (req, res) {
        let productId = (usersService.getBy(req.params.id));
        res.render('users/detail', {userId});
    },

    getAll: function (req, res) {
        res.render('users', {users: userService.getAll()});

    }
}

module.exports = usersControllers;