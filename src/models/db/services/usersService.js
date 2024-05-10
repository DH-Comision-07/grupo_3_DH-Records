// 1. Guardar al usuario en la DB ✔
// 2. Buscar al usuario en la DB que se quiere loguear segun propiedad DB ✔
// 3. Buscar al usuario en la DB por su ID ✔
// 4. Buscar a todos los usuarios ✔
// 5. Editar la informacion de un usuario
// 6. Eliminar un usuario DB ✔


const fs = require('fs');
const path = require('path');
const bcryptjs= require('bcryptjs');
const db = require('..//models');

let userService = {

    users: require('../json/users.json'),
    getAll: function() {
    return this.users;
    },
    getBy: function(id) {
    return this.users.find(user => user.id === id);
    },
    getByField: function(field,text) {
        return this.users.find(user => user[field] === text);          
    },

    //Sequelize 
    createUser: async function (userData) {
        return await db.Users.create(userData);
    },


    delete: function(id) {
        this.users = this.users.filter(user => user.id !== id);                                 
        fs.writeFileSync(path.join(__dirname, '../json/users.json'), JSON.stringify(this.users));
        return this.users;
    },

    hashPassword: function(password){
        return bcryptjs.hashSync( password, 10);
        
    },

    comparePassword: function(inputPassword, userPassword){
        return bcryptjs.compareSync(inputPassword, userPassword);
    },

    update: function(userId, newUserData) {
        console.log(newUserData);
        console.log(userId);
        
        let users = this.getAll();

        let userIndex = users.findIndex(user => user.id == userId);
    
        // Si el usuario existe...
        if (userIndex != -1) {
            
            users[userIndex].image = newUserData.image;
            
            fs.writeFileSync(path.join(__dirname, '../json/users.json'), JSON.stringify(users));
    
            return true;
        }
    
        return false;
    },


    //         JSON

     createId: function() {
        let lastUser = this.users[this.users.length - 1];             
        if(lastUser) {                                               
        return lastUser.id + 1;
        } else {
            return 1;                                                
        }
    },

    create: function(user) {
        let newUser= {
            id: this.createId(),
            ...user                                                   
        }
        this.users.push(newUser);
        fs.writeFileSync(path.join(__dirname, '../json/users.json'), JSON.stringify(this.users));
        return this.users;
    },
    
}


module.exports = userService;



