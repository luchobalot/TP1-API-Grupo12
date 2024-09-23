const express = require('express');
const = 

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Para parsear cuerpos de solicitudes JSON

// Rutas (ejemplo)
app.get('/', (req, res) => {
  res.send('Funciona correctamente el servidor!');
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});