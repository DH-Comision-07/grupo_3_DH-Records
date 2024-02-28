const express = require ('express');
const path = require ('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));



const PORT = 3030; 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/login', (req,res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get("/productos-destacados", (req, res) => res.sendFile(path.join(__dirname, "./views/productos-destacados.html")));

app.get("/banner-promociones", (req, res) => res.sendFile(path.join(__dirname, "./views/banner-promociones.html")));

app.get('/perfil-usuario', (req,res) => {
  res.sendFile(path.resolve(__dirname, './views/perfil-usuario.html'));
});