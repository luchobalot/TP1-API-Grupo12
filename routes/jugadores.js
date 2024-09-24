const{Routes}=require('express');
const rutas=Routes();
const {getJugadores,getJugadoresById}=require('../controllers/jugadores');

app.get('/jugadores',getJugadores ); {
   
}
app.get('/jugadores/:id', getJugadoresById ); {
    
}
module.exports=rutas;