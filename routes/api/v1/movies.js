const express = require('express');
const router = express.Router();
const moviesController = require('../../../controllers/moviesController');


// Listado de registros
router.get('/movies', moviesController.getMovies);

module.exports = router;
