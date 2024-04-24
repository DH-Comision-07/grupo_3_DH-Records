// 1. Guardar al usuario en la DB ✔
// 2. Buscar al usuario en la DB que se quiere loguear segun propiedad DB ✔
// 3. Buscar al usuario en la DB por su ID ✔
// 4. Buscar a todos los usuarios ✔
// 5. Editar la informacion de un usuario
// 6. Eliminar un usuario DB ✔


const fs = require('fs');
const path = require('path');
const bcryptjs= require('bcryptjs');


let userService = {

    getAll: function() {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, './users.json'), 'utf-8'));
    },
    getBy: function(id) {
    return this.getAll().find(user => user.id === id);
    },
    getByField: function(field,text) {
        return this.getAll().find(user => user[field] === text);          
    },


    createId: function() {
        let users = this.getAll();
        let lastUser = users[users.length - 1];             
        if(lastUser) {                                               
        return lastUser.id + 1;
        } else {
            return 1;                                                
        }
    },

    create: function(user) {
        let users = this.getAll();
        let newUser= {
            id: this.createId(),
            ...user                                                   
        }
        users.push(newUser);
        fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users));
        return users;
    },


    delete: function(id) {
        let users = this.getAll(); 
        users = users.filter(user => user.id !== id);                                 
        fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users));
        return users;
    },

    hashPassword: function(password){
        return bcryptjs.hashSync( password, 10);
        
    },

    comparePassword: function(inputPassword, userPassword){
        return bcryptjs.compareSync(inputPassword, userPassword);
    }
    
}


module.exports = userService;




