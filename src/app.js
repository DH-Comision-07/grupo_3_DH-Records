const express = require ('express');
const app = express();
const path = require ('path');

//Config de ruta para arvhicos estaticos
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

//Template Engine
app.set("view engine","ejs");
app.set('views', path.join(__dirname,"/views"));

//Config de session
const session = require ('express-session');
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false
}));

//Config de cookies
const cookies = require('cookie-parser');
app.use(cookies());

//Config estado de Log del usuario 
const userLoggedMid = require('./middlewares/userLoggedMid');
app.use(userLoggedMid);

//Config para capturar la info del formulario con POST en req.body
app.use(express.urlencoded({ extended: false}));   
app.use(express.json());

//PUT/Delete
const methodOverride = require('method-override'); 
app.use(methodOverride('_method')); 


//Config del puerto
const PORT = 3030; 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

//Confir de rutas
const homeRoutes= require('./routes/home.routes');
const productsRoutes = require('./routes/products.routes');
const usersRoutes = require('./routes/users.routes');
const apisRoutes = require('./routes/apis.routes');

app.use('/', homeRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/apis', apisRoutes);

 
