function userLoggedValidationMid(req, res, next) {
    if(req.session.userLogged){
        return res.redirect('/users/:id');
    }
    next();
}

module.exports = userLoggedValidationMid;