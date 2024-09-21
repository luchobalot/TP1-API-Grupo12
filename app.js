require('dotenv').config(); // Cargar variables de entorno
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Para parsear cuerpos de solicitudes JSON

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Funciona correctamente el servidor!');
});

// Rutas de películas
const moviesRoutes = require('./routes/api/v1/movies');
app.use('/api/v1', moviesRoutes);

// Middleware por si el usuario ingresa una ruta que no existe. -- Agregar para el commit
app.use((req, res) => {
  res.status(404).json({ status: 'error', msg: 'No se encontro ninguna ruta!' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
