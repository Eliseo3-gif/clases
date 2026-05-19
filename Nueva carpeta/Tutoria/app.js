let listaEstudiantes = [];
const formulario = document.getElementById("formularioEstudiante");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    if (nombre === "" || isNaN(edad) || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Todos los campos son obligatorios");
        return;
    }

    let promedio = (nota1 + nota2 + nota3) / 3;
    let estado = promedio >= 6 ? "Aprobado" : "Reprobado";
    let estudiante = {
        nombre: nombre,
        edad: edad,
        promedio: promedio.toFixed(2),
        estado: estado
    };
    listaEstudiantes.push(estudiante);

    mostrarEstudiantes();
    formulario.reset();
});
function mostrarEstudiantes() {

    let tabla = document.getElementById("tablaEstudiantes");
    tabla.innerHTML = "";

    for (let i = 0; i < listaEstudiantes.length; i++) {

        let fila = `
            <tr>
                <td>${listaEstudiantes[i].nombre}</td>
                <td>${listaEstudiantes[i].edad}</td>
                <td>${listaEstudiantes[i].promedio}</td>
                <td>${listaEstudiantes[i].estado}</td>
            </tr>
        `;

        tabla.innerHTML += fila;
    }
}