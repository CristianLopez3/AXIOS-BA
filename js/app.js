import axios from 'axios';

// Configuración común para todas las solicitudes
axios.defaults.baseURL = 'http://localhost:9999'; // URL base de la API
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwtToken')}`; // Agrega el token JWT a todas las solicitudes

// Función para realizar una solicitud GET
export async function get(endpoint, options = {}) {
  try {
    const response = await axios.get(endpoint, options);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

// Función para realizar una solicitud POST
export async function post(endpoint, data, options = {}) {
  try {
    const response = await axios.post(endpoint, data, options);
    return response.data;
  } catch (error) {
    throw new Error(`Error creating data: ${error.message}`);
  }
}

// Función para realizar una solicitud PUT (Actualizar)
export async function put(endpoint, data, options = {}) {
  try {
    const response = await axios.put(endpoint, data, options);
    return response.data;
  } catch (error) {
    throw new Error(`Error updating data: ${error.message}`);
  }
}

// Función para realizar una solicitud DELETE (Eliminar)
export async function del(endpoint, options = {}) {
  try {
    const response = await axios.delete(endpoint, options);
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting data: ${error.message}`);
  }
}
