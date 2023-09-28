


// URL de la solicitud
const url = 'http://localhost:9999/user';

// Token JWT
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjQG1haWwuY29tIiwiaXNzIjoidm9sbCBtZWQiLCJpZCI6MywiZXhwIjoxNjk1OTE2OTU3fQ.Uoq_JMWIA8aCKqDukMS1GA1TML9S2C0KPJxfXf96TlM';

// Configuración de la solicitud
const config = {
  headers: {
    'Authorization': `Bearer ${token}`, // Agrega el token JWT al encabezado
    'Content-Type': 'application/json', // Tipo de contenido
  },
};

// Realiza la solicitud GET con Axios
axios.get(url, config)
  .then(response => {
    console.log(response.data); // Imprime la respuesta JSON
  })
  .catch(error => {
    console.error(error); // Maneja errores si los hay
  });
