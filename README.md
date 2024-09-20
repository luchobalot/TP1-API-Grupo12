## API de Películas

### Obtener listado de películas

- **Ruta**: `/api/v1/movies`
- **Método**: `GET`
- **Descripción**: Este endpoint devuelve un listado de películas populares (actuales) desde TMDB. Se asegura de retornar al menos 50 registros, combinando los resultados de múltiples páginas ya TMDB solo muestra 20 películas por página.

- **Parámetros de consulta**:
  - `page` (opcional): Número de página desde la cual comenzar a obtener las películas. Si no se proporciona, se usará la página 1 por defecto.
  
- **Ejemplo de solicitud**:
  ```http
  GET http://localhost:3000/api/v1/movies?page=1
