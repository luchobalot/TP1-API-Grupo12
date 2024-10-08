API de usuarios 

Endpoints:

GET /api/v1/usuarios

Si se utiliza así, se obtiene un json de 50 usuarios generados aleatoriamente por mockaroo
Cada petición te da 50 usuarios distintos
Ej: GET http://localhost:3000/api/v1/usuarios

También estan agregadas los filtros que se pueden utilizar para consiguir usuarios con datos en concreto 
Son opcionales y se pueden filtrar por varios a la vez en con un & entre cada filtro
Se puede filtrar por:
-Country: GET http://localhost:3000/api/v1/usuarios?country=China
-Gender: GET http://localhost:3000/api/v1/usuarios?gender=Female
* Como la api genera usuarios aleatorios todo el tiempo, es probable que no encuentre los siguientes filtros
-First Name: GET http://localhost:3000/api/v1/usuarios?first_name=Agustín
-Last Name: GET http://localhost:3000/api/v1/usuarios?last_name=Puente
-Email: GET http://localhost:3000/api/v1/usuarios?email=agustinpuente@gmail.com

Las respuestas son las siguientes:
-200: Se encontraron los usuarios y los devuelve
-404: No encontró usuarios 
-500: Hubo un fallo del server

GET /api/v1/usuarios/{id}

Se busca un usuarios por su id (esta limitado a de 0 a 50 porque el lo maximo que tira la api)
Solo te devuelve un solo resultado 
Ej: GET http://localhost:3000/api/v1/usuarios/27

Las respuestas son las siguientes:
-200: Se encontró el usuario y lo devuevle
-404: No encontró un usuario
-500: Hubo un fallo del server
## API de Películas

### Obtener listado de películas populares.

- **Ruta**: `/api/v1/movies`
- **Método**: `GET`
- **Descripción**: Este endpoint devuelve un listado de películas populares (actuales) desde TMDB. Se asegura de retornar al menos 50 registros, combinando los resultados de múltiples páginas ya TMDB solo muestra 20 películas por página.

- **Parámetros de consulta (Query Params)**:
  - `page` (opcional): Número de página desde la cual comenzar a obtener las películas. Si no se proporciona, se usará la página 1 por defecto.
  - `lang` (opcional): Idioma en el que se retornan las peliculas. Por ejemplo, en-US para inglés o es-ES para español. Por defecto = es-ES.
  - `year` (opcional): Filtro por año de lanzamiento de las películas. Solo se muestran películas lanzadas en ese año.
  - `order` (opcional): Ordena las películas por popularidad (popularity.desc) o por fecha de estreno (release_date.desc). Por defecto, las películas se ordenan por popularidad.
  - `include_adult` (opcional): Permite incluir o excluir películas para adultos. true para incluir o false para excluir (por defecto se excluyen).
  
- **Ejemplo de solicitud**:
  ```http
  GET http://localhost:3000/api/v1/movies?page=1

  
  GET http://localhost:3000/api/v1/movies?page=1&lang=en-US&year=2020&order=release_date.desc&include_adult=false

  
  GET http://localhost:3000/api/v1/movies?lang=en-US

  
  GET http://localhost:3000/api/v1/movies?year=2020

  
  GET http://localhost:3000/api/v1/movies?include_adult=false

- **Manejo de errores**: En caso de que haya algún error inesperado, se devuelve el mensaje de error correspondiente (500). Si no se encuentran suficientes películas o no se cumple el filtro, se devuelve un mensaje de error (404).


### Obtener listado de películas por su ID

- **Ruta**: `/api/v1/movies/:id`
- **Método**: `GET`
- **Descripción**: Este endpoint devuelve los detalles de una película específica desde TMDB usando el ID de la película.

- **Parámetros de consulta**:
  - `id` (obligatorio): El ID de la película que se quiere consultar.
  
- **Ejemplo de solicitud**:
  ```http
  GET http://localhost:3000/api/v1/movies/123

- **Manejo de errores**: En caso de no encontrar una película por su ID, se devuelve un mensaje de error (404) de que la película no fue encontrada. Si hay algun error inesperado también se devuelve el mensaje de error correspondiente (500).
Rutas de la API
1. Listar jugadores
Descripción: Retorna un listado de 50 jugadores en formato JSON.
URL: /api/v1/jugadores
Método HTTP: GET

Ejemplo de solicitud:
1. Sin Parámetros de Consulta
Obtiene todos los jugadores sin filtrar.
 GET "http://localhost:3000/api/v1/jugadores"
2. Filtrar por Nombre
Filtra los jugadores cuyo nombre es "Diogo".
 GET "http://localhost:3000/api/v1/jugadores?nombre=Diogo"
3. Filtrar por Equipo
Filtra los jugadores que pertenecen al equipo "Liverpool".
 GET "http://localhost:3000/api/v1/jugadores?equipo=Liverpool"
4. Filtrar por Nacionalidad
Filtra los jugadores de nacionalidad "Portugal".
 GET "http://localhost:3000/api/v1/jugadores?nacionalidad=Portugal"

2. Obtener Jugador por ID
Método: GET
Ruta: /jugadores/:id
Ejemplos de Solicitudes para Obtener un Jugador por ID
1. Obtener Jugador por ID
Obtiene el jugador con un ID específico, por ejemplo, el ID 20.
 GET "http://localhost:3000/api/v1/jugadores/20"





