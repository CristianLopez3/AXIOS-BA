
document.getElementById('saveQuestion').addEventListener('submit', function (e) {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const form = localStorage.getItem("formId");
    const token = localStorage.getItem("jwtToken");
    // Realizar la solicitud de inicio de sesión
    axios.post(`http://localhost:9999/question`, {
       description,
       form
    }, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json"
        }
    })
    .then(response => {
        console.log("Pregunta guardada correctamente")

    })
    .catch(error => {
        console.error('Error de inicio de sesión:', error);
    });
});


