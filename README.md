## API de Películas

### Obtener listado de películas populares.

- **Ruta**: `/api/v1/movies`
- **Método**: `GET`
- **Descripción**: Este endpoint devuelve un listado de películas populares (actuales) desde TMDB. Se asegura de retornar al menos 50 registros, combinando los resultados de múltiples páginas ya TMDB solo muestra 20 películas por página.

- **Parámetros de consulta**:
  - `page` (opcional): Número de página desde la cual comenzar a obtener las películas. Si no se proporciona, se usará la página 1 por defecto.
  
- **Ejemplo de solicitud**:
  ```http
  GET http://localhost:3000/api/v1/movies?page=1

- **Manejo de errores**: En caso de que haya algun error inesperado se devuelve el mensaje de error correspondiente (500).


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

