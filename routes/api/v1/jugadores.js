const { Router } = require('express')
const jugadoresController = require('../../../controllers/jugadoresController')
const routes = Router()
// Endpoint para obtener todos los jugadores
routes.get('/', jugadoresController.getJugadores)
routes.get('/:id', jugadoresController.getJugadorPorId)
module.exports = routes
