document.getElementById('saveForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const creator = parseInt(localStorage.getItem("userId"));
    const token = localStorage.getItem("jwtToken");

    // Realizar la solicitud PUT para actualizar los datos del usuario
    axios.post(`http://localhost:9999/form`, {
        title,
        description,
        start,
        end,
        creator
    }, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json"
        }
    })
    .then(response => {
        // Manejar la respuesta exitosa, si es necesario
        console.log('Formulario guardaddo correctamente:', response.data);
        localStorage.setItem("formId", response.data.id);
        // Aquí puedes proporcionar retroalimentación al usuario, redireccionar, etc.
    })
    .catch(error => {
        console.error('Error al guardar los datos del formulario:', error);
        // Aquí puedes manejar errores y proporcionar retroalimentación al usuario si es necesario
    });
});

document.getElementById('updateForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const creator = parseInt(localStorage.getItem("userId"));
    const token = localStorage.getItem("jwtToken");

    // Realizar la solicitud PUT para actualizar los datos del usuario
    axios.put(`http://localhost:9999/form`, {
        title,
        description,
        start,
        end,
        creator
    }, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json"
        }
    })
    .then(response => {
        // Manejar la respuesta exitosa, si es necesario
        console.log('Formulario guardaddo correctamente:', response.data);
        localStorage.setItem("formId", response.data.id);
        // Aquí puedes proporcionar retroalimentación al usuario, redireccionar, etc.
    })
    .catch(error => {
        console.error('Error al guardar los datos del formulario:', error);
        // Aquí puedes manejar errores y proporcionar retroalimentación al usuario si es necesario
    });
});