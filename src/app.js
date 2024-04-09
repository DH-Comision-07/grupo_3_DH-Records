const express = require ('express');
const app = express();
const path = require ('path');
const publicPath = path.resolve(__dirname, '../public');

// Captura info formulario POST para req.body
app.use(express.urlencoded({ extended: false}));   
app.use(express.json());

//Template Engine
app.set("view engine","ejs");
app.set('views', path.join(__dirname,"/views"));


app.use(express.static(publicPath));

//PUT/Delete
const methodOverride = require('method-override'); 
app.use(methodOverride('_method')); 

const PORT = 3030; 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

//Routers
const homeRoutes= require('./routes/home.routes');
app.use('/', homeRoutes);

 
