const axios =  require('axios');

const getUsers = async (req, res) => {
  
  try {
    const apiKey = process.env.API_USERS_KEY;

    const response = await axios.get('https://my.api.mockaroo.com/usuarios_api', {
      headers: {
        "X-API-Key": "6ce69550"
      } 
    });
    
    res.status(200).json({ status: 'ok', data: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {

  try {
    const apiKey = process.env.API_USERS_KEY;
    const id = req.params.id;
    const response = await axios.get(`https://my.api.mockaroo.com/usuarios_api`, {
      headers: {
        "X-API-Key": "6ce69550"
      }
    });

    //filtra los usuarios por el id
    const user = response.data.find(user => user.id == id);
    
    if (user) {
      // Devuelve el usuario completo si se encuentra
      res.status(200).json(user);
    } else {
      // Si no se encuentra, se devuelve un error 404
      res.status(404).json({ status: 'error', message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById
}