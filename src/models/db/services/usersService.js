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
    //Sequelize
    getBy2: async function(id) {
        try {
            return await db.Users.findByPk(id);
        } catch (error) {
            console.log(error);
            return {      // objeto falso
                id: 0,
                nombreUsuario: "No encontrado",
                
            }
        } 
    },
        

    getByField: function(field,text) {
        return this.users.find(user => user[field] === text);          
    },

    //Sequelize 
    getAll2: async function (){
        try {
            const users = await db.Users.findAll();
            return users;
        } catch (error) {
            console.log('error');
            return [];
        }
    },

    createUser: async function (userData) {
        let { nombreUsuario, email, contraseña, terminosCondiciones } = userData;
        const newUser = await db.Users.create({
            nombreUsuario,
            email,
            contraseña,
            terminosCondiciones,
         });
        return newUser;
    },
 
    hashPassword: function(password){
        return bcryptjs.hashSync( password, 10);
        
    },

    comparePassword: function(inputPassword, userPassword){
        return bcryptjs.compareSync(inputPassword, userPassword);
    },

    updateImage: function(userId, newUserData) {
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

    delete: function(id) {
        this.users = this.users.filter(user => user.id !== id);                                 
        fs.writeFileSync(path.join(__dirname, '../json/users.json'), JSON.stringify(this.users));
        return this.users;
    },

    
}


module.exports = userService;




