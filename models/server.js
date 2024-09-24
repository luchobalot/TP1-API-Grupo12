// server.js

const app = require('./app') // Importamos la configuración de la app desde app.js

// Definir el puerto y levantar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
