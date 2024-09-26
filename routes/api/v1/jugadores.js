const { Router } = require('express')
const jugadoresController = require('../../../controllers/jugadoresController')
const routes = Router()
// Endpoint para obtener todos los jugadores
routes.get('/jugadores', jugadoresController.getJugadores)
routes.get('/jugadores/:id', jugadoresController.getJugadorPorId)
module.exports = routes
