const usersService = require ('../models/db/services/usersService');

let apisUsersControllers = {

    usersList: async function(req, res) {
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
    }

}

module.exports = apisUsersControllers;