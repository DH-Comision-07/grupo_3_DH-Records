const path = require('path');
const multer= require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/Images/main-img-product'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, 'imageProducts' + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  const multerProductsMid = multer({ storage: storage });

  module.exports = multerProductsMid;