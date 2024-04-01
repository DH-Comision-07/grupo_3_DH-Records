const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');
const productsControllers = require('../controllers/productsControllers');

//--- Configuración de Multer para la carga de archivos

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/Imagenes/main-img-product'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })


//--- Rutas de productos 

routes.get('/detail/:id', productsControllers.detail);

routes.delete('/:id', productsControllers.detailDelete);

routes.get('/cart', productsControllers.cart);

routes.get('/create', productsControllers.create);

routes.get("/edit/:id", productsControllers.edit);

routes.get('/', productsControllers.getAll);

routes.post('/', upload.fields([{ name: 'imagen' }]), productsControllers.store);




module.exports = routes;