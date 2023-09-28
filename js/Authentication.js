// Importar la función de registro (POST) que envía datos al servidor
import { post, get } from './ApiService.js';

// Capturar el formulario de registro
const $login = document.getElementById('login');
//const userTable = document.getElementById('user-table'); // Agrega un elemento HTML para mostrar la lista de usuarios




  fetch("http://localhost:9999/user", {
    method: "GET", // Especifica el método HTTP (GET en este caso)
    headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjQG1haWwuY29tIiwiaXNzIjoidm9sbCBtZWQiLCJpZCI6MywiZXhwIjoxNjk1OTE2MzU0fQ.uRCChmwlTP9gdzIWQkg_zaOhmUuwyfuwwP-SVbiBADs", 
      "Content-Type": "application/json", // Cambié "Content-type" a "Content-Type"
      "Access-Control-Allow-Origin": "*"
      
    },
    mode: "no-cors",
    credentials: "include",
    
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  