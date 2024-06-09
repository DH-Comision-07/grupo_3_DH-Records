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
  
//Validacion del tipo de archivo de la imagen.
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true); 
  } else {
    req.multerValidationError = new Error('Solo se permiten archivos JPG y PNG');
    cb(null, false); // Rechazar el archivo
  }
};

const multerProductsMid = multer({ storage: storage, fileFilter: fileFilter });

module.exports = multerProductsMid;