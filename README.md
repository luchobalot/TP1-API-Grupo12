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
