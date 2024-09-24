const express = require('express')
const { getJugadores, getJugadorPorId } = require('../controllers/jugadoresController')

const router = express.Router()

//  ruta para obtener la lista de jugadores con query params opcionales (page, lang)
router.get('/', getJugadores)

// ruta para obtener un jugador específico por su ID
router.get('/:id', getJugadorPorId)

// Exportar el router para que pueda ser utilizado en el servidor
module.exports = router
