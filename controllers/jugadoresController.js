const axios = require('axios')
const { request, response } = require('express')

// Controlador para obtener todos los jugadores
const getJugadores = (req = request, res = response) => {
  // Extrae los query params de la solicitud
  const { nombre, equipo, nacionalidad } = req.query

  // Crea un objeto para los parámetros de consulta
  const params = {}

  // Agrega solo los parámetros que existen
  if (nombre) params.nombre = nombre
  if (equipo) params.equipo = equipo
  if (nacionalidad) params.nacionalidad = nacionalidad
  const apiKey = process.env.API_KEY

  // Realiza la solicitud a la API con los query params
  axios.get('https://66f1d9f94153791915525fe1.mockapi.io/api/v1/jugadores/Jugadores', {
    params,
    headers: {
      Authorization: `Bearer ${apiKey}` // Agrega la API key en el header
    }
  })
    .then((response) => {
      const { data } = response
      console.log(data)
      res.status(200).json({
        msg: 'ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({
        msg: 'error',
        error: error.message
      })
    })
}
const getJugadorPorId = (req = request, res = response) => {
  const { id } = req.params // Obtiene el ID del parámetro de la URL
  const apiKey = process.env.API_KEY
  axios.get('https://66f1d9f94153791915525fe1.mockapi.io/api/v1/jugadores/Jugadores', {
    params: { id },
    headers: {
      Authorization: `Bearer ${apiKey}` // Agrega la API key en el header
    }
  })
    .then((response) => {
      const { data } = response
      console.log(data)
      res.status(200).json({
        msg: 'ok',
        data
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({
        msg: 'error',
        error: error.response ? error.response.data : error.message
      })
    })
}

// Exportar las funciones
module.exports = {
  getJugadores,
  getJugadorPorId

}
