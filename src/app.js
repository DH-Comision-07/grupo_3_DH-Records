const express = require ('express');
const app = express();
const path = require ('path');
const publicPath = path.resolve(__dirname, '../public');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.set("view engine","ejs");
app.set('views', path.join(__dirname,"/views"));


app.use(express.static(publicPath));

app.use(express.urlencoded({ extended: false }));  //Post
app.use(express.json());                       
const methodOverride = require('method-override'); //PUT/Delete
app.use(methodOverride('_method')); 

const PORT = 3030; 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


const homeRoutes= require('./routes/home.routes');
app.use('/', homeRoutes);

 
