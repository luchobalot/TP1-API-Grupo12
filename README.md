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

  ```http
  GET GET http://localhost:3000/api/v1/movies?page=1&lang=en-US&year=2020&order=release_date.desc&include_adult=false

  ```http
  GET http://localhost:3000/api/v1/movies?lang=en-US

  ```http
  GET http://localhost:3000/api/v1/movies?year=2020

    ```http
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

- **Manejo de errores**: En caso de no encontrar una película por su ID, se devuelve un mensaje de error (404) de que la película no fue encontrada.

 Si hay algun error inesperado también se devuelve el mensaje de error correspondiente (500).

