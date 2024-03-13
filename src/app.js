const express = require ('express');
const app = express();
const path = require ('path');
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));


const PORT = 3030; 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


const homeRoutes= require('./routes/home.routes');

app.use('/', homeRoutes);

//le declaro a express el motor de plantilla que voy a usar
//app.set("view enjine","ejs")
//app.set("views", __dirname + "./src/views")

