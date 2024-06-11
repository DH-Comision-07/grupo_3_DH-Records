const path = require('path');
const multer=require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/Images/users'))
    },
    filename: function (req, file, cb) {
        cb(null, 'userProfile' + '-' + Date.now() + path.extname(file.originalname))
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const multerUsersMid = multer({
     storage,
     fileFilter

    });

module.exports = multerUsersMid;