
document.getElementById('updateForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const city = document.getElementById('city').value;
    const education = document.getElementById('education').value;
    const interest = document.getElementById('interest').value;
    const id = parseInt(localStorage.getItem("userId"));
    const token = localStorage.getItem("jwtToken");

    // Realizar la solicitud PUT para actualizar los datos del usuario
    axios.put(`http://localhost:9999/user/${id}`, {
        name,
        password,
        city,
        education,
        interest
    }, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json"
        }
    })
    .then(response => {
        // Manejar la respuesta exitosa, si es necesario
        console.log('Datos actualizados correctamente:', response.data);
        // Aquí puedes proporcionar retroalimentación al usuario, redireccionar, etc.
    })
    .catch(error => {
        console.error('Error al actualizar los datos del usuario:', error);
        // Aquí puedes manejar errores y proporcionar retroalimentación al usuario si es necesario
    });
});
