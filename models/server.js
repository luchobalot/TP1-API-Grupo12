const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.routes()
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  routes () {
    // Puente
    this.app.use('/api/v1', require('../routes/api/v1/usuarios'))
    // Balot
    this.app.use('/api/v1', require('../routes/api/v1/movies'))
    // Miqueleiz
    this.app.use('/api/v1', require('../routes/api/v1/jugadores'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el puerto ${this.port}`)
    })
  }
}
module.exports = Server
