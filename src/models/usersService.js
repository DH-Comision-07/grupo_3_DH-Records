
const fs = require('fs');

const users = require('./users.json');


let userService = {
    users: users,

    getAll: function() {
    return this.users;
    },
    getBy: function(id) {
    return this.users.find(user => user.id == id);
    }
}

module.exports = userService;