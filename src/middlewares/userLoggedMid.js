const usersService = require ('../models/db/services/usersService');

async function userLoggedMid(req, res, next) {
    res.locals.isLogged = false;
    

    //si no tengo usuario logueado reviso si tengo algun email de usuario en las cookies
    let emailInCookies = req.cookies.userEmail;
    let userFromCookies;

    if (emailInCookies) {
        userFromCookies = await usersService.getByField('email', emailInCookies);
    }
    
    //si encontre un usuario segun el email de la cookie lo paso a sesion
    if(userFromCookies){
        req.session.userLogged =  userFromCookies;
        res.locals.isLogged = true;
    }
    
    //si tengo un usuario en sesion lo paso a la variable local
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged.dataValues;
    }

    next();
}

module.exports = userLoggedMid;