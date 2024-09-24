// controllers/jugadoresController.js
const axios = require('axios')
require('dotenv').config() // Asegúrate de tener esta línea para cargar las variables de entorno

// Definimos la URL base de la API
const BASE_URL = process.env.URL // Reemplaza 'https://66f1d9f94153791915525fe1.mockapi.io/api/v1/jugadores/Jugadores' con la URL de tu API

const getJugadores = (req, res) => {
  const { page, lang } = req.query
  const endpoint = 'jugadores'

  // Construimos la URL con query params si están presentes
  const url = `${BASE_URL}/${endpoint}`

  // query params
  const params = {}
  if (page) params.page = page
  if (lang) params.lang = lang

  // solicitud a la API
  axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}` // Incluimos el API key
    },
    params // Pasamos los parámetros de consulta
  })
    .then(response => {
      res.status(200).json({ status: 'ok', data: response.data })
    })
    .catch(error => {
      console.error('Error al obtener jugadores:', error)
      res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la información' })
    })
}

// controlador para obtener un jugador por ID
const getJugadorPorId = (req, res) => {
  const { id } = req.params
  const url = `${BASE_URL}/jugadores/${id}`

  // solicitud a la API
  axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}` // Incluimos el API key
    }
  })
    .then(response => {
      if (response.data) {
        res.status(200).json({ status: 'ok', data: response.data })
      } else {
        res.status(404).json({ status: 'error', msg: 'Jugador no encontrado' })
      }
    })
    .catch(error => {
      console.error('Error al obtener jugador:', error)
      res.status(500).json({ status: 'error', msg: 'Error inesperado al obtener la información' })
    })
}

// Export
module.exports = {
  getJugadores,
  getJugadorPorId
}
