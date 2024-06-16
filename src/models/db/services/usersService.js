// 1. Guardar al usuario en la DB ✔
// 2. Buscar al usuario en la DB que se quiere loguear segun propiedad DB ✔
// 3. Buscar al usuario en la DB por su ID ✔
// 4. Buscar a todos los usuarios ✔
// 5. Editar la informacion de un usuario
// 6. Eliminar un usuario DB ✔


const fs = require('fs');
const path = require('path');
const bcryptjs= require('bcryptjs');
const db = require('../models');


let userService = {

    
   
    getByField: async function(field, text) {
        return await db.Users.findOne({ where: { [field]: text } });
      },

    //Sequelize 
    getAll: async function (){
        try {
            const users = await db.Users.findAll();
            return users;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    getBy: async function(id) {
        try {
            let user = await db.Users.findByPk(id);
            if (!user) {
                user = {
                    id: 0,
                    nombreUsuario: "No encontrado",
                    email: "No encontrado",
                    imagenUsuario: "No encontrado"
                }
            }
            return user;
        } catch (error) {
            console.log(error);
            return {
                id: 0,
                nombreUsuario: "No encontrado",
                email: "No encontrado",
                imagenUsuario: "No encontrado"
            }
        } 
    },
   
        
    update: async function (id, body) {
        try {
            const user = await this.getBy(id);
            if (user.id === 0) {
                console.log(`Usuario con id ${id} no encontrado`);
                return;
            }
            if (body.contraseña) {
                body.contraseña = bcryptjs.hashSync(body.contraseña, 10);
            }
            return await db.Users.update(body, {where: { id:id }})  ; 
        } catch (error) {
            console.log(error);
        }   
    },

    deleteUser: async function(id) {
        try {
            console.log(id);
            return await db.Users.destroy({ where: { id:id }});
        } catch (error) {
            console.log(error);
        }
    },

    createUser: async function(userData) {
        // Verificar si ya existe un usuario con el mismo nombre o correo electrónico
        const existingUser = await this.getByField('nombreUsuario', userData.nombreUsuario);
        if (existingUser) {
            return { error: 'Ya existe un usuario con este nombre de usuario' };
        }
        const existingEmail = await this.getByField('email', userData.email);
        if (existingEmail) {
            return { error: 'Ya existe un usuario con este correo electrónico' };
        }
    
        // Como es tipo Boolean, en mysql se representan como 1 o 0, por eso lo adapto.
        userData.terminosCondiciones = userData.terminosCondiciones === 'on' ? 1 : 0;
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

    updateImage: async function(userId, newUserData) {
      
        try {
            let user =await db.Users.findByPk(userId);
        
            if(user){
                user.imagenUsuario = newImageData.image;
                await user.save();
                return true;
            }

            return false;
            
        } catch (error){
            console.log(error);
            return false;
        }
            
     
    },

    

 

    
}


module.exports = userService;




