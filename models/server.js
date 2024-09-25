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
    // Miqueleiz
    this.app.use('/api/v1/jugadores', require('../routes/api/v1/jugadores'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`)
    })
  }
}
module.exports = Server
