const usersService = require ('../models/db/services/usersService');

let apisUsersControllers = {

    listAll: async function(req, res) {
        try { 
            let usersList = await usersService.getAll()
            let response = {
                 status: 'exito',
                 total: usersList.length,
                 users: usersList
             };
            res.status(200).json(response);

        } catch (error) { 
            res.status(500).json({
                status: 'error',
                error: error
            });
        }
    },
    
    detail: async function(req, res) {
        try { 
            let userId = await usersService.getBy(req.params.id);
            let response = {
                status: 'exito',
                user: userId
            };
           res.status(200).json(response);
        } catch (error) { 
            res.status(500).json({
                status: 'error',
                error: error
            });
        }
    },

   

}

module.exports = apisUsersControllers;