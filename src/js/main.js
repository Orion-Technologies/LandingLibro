document.getElementById('submitBtn').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Boton Presionado')

    const nombre = document.getElementById('validationDefault01').value;

    const correo = document.getElementById('exampleInputEmail1').value;

const contacto = {
    nombre: nombre,
    correo: correo
}

fetch('/saveData', {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(contacto)
})
.then(response => {
    if(response.ok) {
        setTimeout(function() {
            window.location.href = '../pages/libros.html';
        }, 3000);
    } else {
        console.error("Error al enviar los datos del contacto al servidor")
    }
})
.catch(error => {
    console.error('Error de red: ', error);
    });
});