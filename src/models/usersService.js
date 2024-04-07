// 1. Guardar al usuario en la DB ✔
// 2. Buscar al usuario en la DB que se quiere loguear segun propiedad DB ✔
// 3. Buscar al usuario en la DB por su ID ✔
// 4. Buscar a todos los usuarios ✔
// 5. Editar la informacion de un usuario
// 6. Eliminar un usuario DB


const fs = require('fs');
const path = require('path');
const users = require('./users.json');


let userService = {

    users: users,

    getAll: function() {
    return this.users;
    },
    getBy: function(id) {
    return this.users.find(user => user.id === id);
    },
    getByField: function(field,text) {
        return this.users.find(user => user[field] === text);          // user[field] encuentra el valor de la propiedad buscada y user.field es para usar literalmente una propiedad con nombre field.
    },


    createId: function() {
        let lastUser = this.users[this.users.length - 1];             // Encontrar ultimo usuario
        if(lastUser) {                                               
        return lastUser.id + 1;
        } else {
            return 1;                                                // Por si esta vacio Array que haga 1
        }
    },

    create: function(user) {
        let newUser= {
            id: this.createId(),
            ...user                                                   // Copia todas las propiedades enumerables propias de user al nuevo objeto newUser
        }
        this.users.push(newUser);
        fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(this.users));
        return this.users;
    },


    delete: function(id) {
        this.users = this.users.filter(user => user.id !== id);                                 
        fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(this.users));
        return this.users;
    }

}

console.log(userService.delete(11));

module.exports = userService;




