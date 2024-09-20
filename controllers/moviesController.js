const axios = require('axios');

// Controlador para listar películas
const getMovies = async (req, res) => {
  try {
    const apiKey = process.env.API_key;
    const page = req.query.page || 1;
    const movies = [];

    let currentPage = page;
    while (movies.length < 50) {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: apiKey,
          language: 'es-ES',
          page: currentPage // Se solicita la página correspondiente.
        }
      });

      movies.push(...response.data.results); // Se agregan las películas a la lista.
      currentPage++; // Se pasa a la siguiente página.
    }

    if (movies.length < 50) {
      return res.status(400).json({ status: 'error', msg: 'No se encontraron suficientes registros.' });
    }

    res.status(200).json({ status: 'ok', data: movies.slice(0, 50) }); // Devolver solo las primeras 50 pelculas.
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la información' });
  }
};

module.exports = {
  getMovies,
};
