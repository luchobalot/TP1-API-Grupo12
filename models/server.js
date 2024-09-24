// Importar dependencias necesarias
const express = require('express')
const dotenv = require('dotenv')
const jugadoresRoutes = require('../routes/jugadores')

// Cargar variables de entorno desde el archivo .env
dotenv.config()

// Función para configurar y devolver una instancia del servidor Express
const createServer = () => {
  // Crear una instancia de la aplicación de Express
  const app = express()

  // Middleware para parsear JSON
  app.use(express.json())

  // Ruta Miqueleiz
  app.use('/api/v1/jugadores', jugadoresRoutes)

  // Middleware de manejo de errores
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ status: 'error', msg: 'Error inesperado en el servidor' })
  })

  return app
}

// Exportar la función de creación del servidor
module.exports = { createServer }
