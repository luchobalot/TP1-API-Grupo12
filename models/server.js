const require = require('express');
class Servidor{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;   
        this.rutas();
}
rutas(){
    this.app.use('api/v1/jugadores',require('../routes/jugadores'));
}
listen(){
    this.app.listen(this.port, () => {
        console.log(`La api esta escuchando en el puerto ${this.port}`);
    });
}


}
module.exports = Servidor;