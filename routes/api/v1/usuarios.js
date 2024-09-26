const express = require('express')
const router = express.Router()
const usuariosController = require('../../../controllers/usuarios')

router.get('/usuarios', usuariosController.getUsers)
router.get('/usuarios/:id', usuariosController.getUserById)

module.exports = router
