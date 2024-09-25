Rutas de la API
1. Listar jugadores
Descripción: Retorna un listado de 50 jugadores en formato JSON.
URL: /api/v1/jugadores
Método HTTP: GET

Ejemplo de solicitud:
1. Sin Parámetros de Consulta
Obtiene todos los jugadores sin filtrar.
curl -X GET "http://localhost:3000/api/v1/jugadores"
2. Filtrar por Nombre
Filtra los jugadores cuyo nombre es "Diogo".
curl -X GET "http://localhost:3000/api/v1/jugadores?nombre=Diogo"
3. Filtrar por Equipo
Filtra los jugadores que pertenecen al equipo "Liverpool".
curl -X GET "http://localhost:3000/api/v1/jugadores?equipo=Liverpool"
4. Filtrar por Nacionalidad
Filtra los jugadores de nacionalidad "Portugal".
curl -X GET "http://localhost:3000/api/v1/jugadores?nacionalidad=Portugal"

2. Obtener Jugador por ID
Método: GET
Ruta: /jugadores/:id
Ejemplos de Solicitudes para Obtener un Jugador por ID
1. Obtener Jugador por ID
Obtiene el jugador con un ID específico, por ejemplo, el ID 20.
curl -X GET "http://localhost:3000/api/v1/jugadores/20"





