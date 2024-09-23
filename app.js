const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Para parsear cuerpos de solicitudes JSON

// Rutas (ejemplo)
app.get('/', (req, res) => {
  res.send('Funciona correctamente el servidor!');
});

// Rutas de Usuarios
const usuariosRoutes = require('./routes/api/v1/usuarios');
app.use('/api/v1', usuariosRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});