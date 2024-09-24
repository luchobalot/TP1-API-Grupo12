// Importar dependencias necesarias
const express = require('express')
const jugadoresRoutes = require('./routes/jugadores')
const dotenv = require('dotenv')

// Cargar variables de entorno desde el archivo .env
dotenv.config()

// Crear una instancia de la aplicación de Express
const app = express()

// Middleware para parsear JSON
app.use(express.json())

// Definir la ruta principal de jugadores, apuntando al archivo de rutas
app.use('/api/v1/jugadores', jugadoresRoutes)

// Definir el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000

// Iniciar el servidor
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})

// Exportar la aplicación para uso en otros módulos (por ejemplo, pruebas)
module.exports = server
