const express = require('express');
const router = express.Router();
const moviesController = require('../../../controllers/moviesController');


// Listado de registros
router.get('/movies', moviesController.getMovies);

router.get('/movies/:id', moviesController.getMovieById);

module.exports = router;
