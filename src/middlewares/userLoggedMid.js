const usersService = require ('../models/usersService');

function userLoggedMid(req, res, next) {
    res.locals.isLogged = false;
    
    //reviso si tengo algun email de usuario en las cookies
    let emailInCookies = req.cookies.userEmail;
    let userFromCookies = usersService.getByField('email', emailInCookies);
    
    //si encontre un usuario segun el email de la cookie lo paso a sesion
    if(userFromCookies){
        req.session.userLogged = userFromCookies;
    }

    //si tengo un usuario en sesion lo paso a la variable local
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMid;