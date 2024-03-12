const express = require ('express');
const app = express();
const path = require ('path');
const publicPath = path.resolve(__dirname, '../public');

app.set("view engine","ejs");
app.set('views', path.join(__dirname,"/views"));

app.use(express.static(publicPath));


const PORT = 3030; 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


const homeRoutes= require('./routes/home.routes');

app.use('/', homeRoutes);

