const axios = require('axios')

const getUsers = async (req, res) => {
  try {
    const apiKey = process.env.API_USERS_KEY
    // querys
    const { country, gender, first_name, last_name, email } = req.query

    const response = await axios.get('https://my.api.mockaroo.com/usuarios_api', {
      headers: {
        'X-API-Key': apiKey
      }
    })

    let users = response.data

    // Aplicamos los filtros si están presentes
    if (country) {
      users = users.filter(user => user.country === country)
    }

    if (gender) {
      users = users.filter(user => user.gender === gender)
    }

    if (first_name) {
      users = users.filter(user => user.first_name === first_name)
    }

    if (last_name) {
      users = users.filter(user => user.last_name === last_name)
    }

    if (email) {
      users = users.filter(user => user.email === email)
    }

    if (users.length > 0) {
      // Devuelve los usuarios filtrados
      res.status(200).json({ status: 'ok', data: users })
    } else {
      // Si no se encuentran usuarios con los filtros dados, devolver un mensaje
      res.status(404).json({ status: 'error', message: 'No se encontraron usuarios con los filtros dados' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

const getUserById = async (req, res) => {
  try {
    const apiKey = process.env.API_USERS_KEY
    const id = req.params.id
    const response = await axios.get('https://my.api.mockaroo.com/usuarios_api', {
      headers: {
        'X-API-Key': apiKey
      }
    })

    // filtra los usuarios por el id
    const user = response.data.find(user => user.id === id)

    if (user) {
      // Devuelve el usuario completo si se encuentra
      res.status(200).json(user)
    } else {
      // Si no se encuentra, se devuelve un error 404
      res.status(404).json({ status: 'error', message: 'Usuario no encontrado' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getUsers,
  getUserById
}
