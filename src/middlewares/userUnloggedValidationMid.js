function userUnloggedValidationMid(req, res, next) {
    if(!req.session.userLogged){
        console.log('Usuario no logueado. Redirigiendo a /users/login');
        return res.redirect('/users/login');
    }
    next();
}

module.exports = userUnloggedValidationMid;