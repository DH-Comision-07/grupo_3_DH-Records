function userLoggedValidationMid(req, res, next) {
    if(req.session.userLogged){
        return res.redirect('/users/detail/:id');
    }
    next();
}

module.exports = userLoggedValidationMid;