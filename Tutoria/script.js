let ListaInscriptos = [];
const formulario = document.getElementById("formularioInscripcion");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let nombrecompleto = document.getElementById("nombrecompleto").value;
    let edad = parseInt(document.getElementById("edad").value);
    let correo = document.getElementById("correo").value;
    let carnet = document.getElementById("carnet").value;
    let telefono = document.getElementById("telefono").value;
    let curso = document.getElementById("curso").value;
    if (nombrecompleto === "" || isNaN(edad) || correo === "" || carnet === "" || telefono === "" || curso === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    let inscripcion = {
        nombrecompleto: nombrecompleto,
        edad: edad,
        correo: correo,
        carnet: carnet,
        telefono: telefono,
        curso: curso
    };
    ListaInscriptos.push(inscripcion);

    mostrarInscriptos();
    formulario.reset();
});

function mostrarInscriptos() {
    let tabla = document.getElementById("tablaInscriptos");
    tabla.innerHTML = "";

    for (let i = 0; i < ListaInscriptos.length; i++) {
        let fila = `
            <tr>
                <td>${ListaInscriptos[i].nombre}</td>
                <td>${ListaInscriptos[i].edad}</td>
                <td>${ListaInscriptos[i].correo}</td>
                <td>${ListaInscriptos[i].carnet}</td>
                <td>${ListaInscriptos[i].telefono}</td>
                <td>${ListaInscriptos[i].curso}</td>
            </tr>
        `;
        tabla.innerHTML += fila;    
    }
}