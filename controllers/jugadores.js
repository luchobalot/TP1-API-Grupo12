const getJugadores=function(req,res){
    res.json(names,"Controlador de jugadores")
}
const getJugadoresById=function(req,res){
    res.json(names,"Controlador de busqueda de jugadores por id")
}
module.exports={
    getJugadores,
    getJugadoresById
}