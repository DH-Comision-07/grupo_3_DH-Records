const path = require('path');
const multer=require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/Images/users'))
    },
    filename: function (req, file, cb) {
        cb(null, 'userProfile' + '-' + Date.now() + path.extname(file.originalname))   //determina el nombre del archivo subido = 'userProfile'
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
        cb(null, true);
        req.multerValidationError = false;
    } else {
        req.multerValidationError = new Error('Solo se permiten archivos JPG, PNG, JPEG o GIF');
        cb(null, false);
    }
}



const multerUsersMid = multer({ storage, fileFilter });

module.exports = multerUsersMid;