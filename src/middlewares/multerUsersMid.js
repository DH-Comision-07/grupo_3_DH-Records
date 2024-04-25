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

const multerUsersMid = multer({ storage: storage });

module.exports = multerUsersMid;