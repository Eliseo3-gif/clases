// Tipo de usuario
let tipoUsuario = "";

// Lista de vehículos
let parqueo = [];

// LOGIN
function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;

    if (user === "admin" && pass === "1234") {
        tipoUsuario = "admin";
    } else if (user === "operador" && pass === "5678") {
        tipoUsuario = "operador";
    } else {
        document.getElementById("error").innerText = "Credenciales incorrectas";
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

// REGISTRAR ENTRADA
function entrada() {
    let placa = document.getElementById("placa").value;

    if (placa === "") {
        alert("Ingrese una placa");
        return;
    }

    let existe = parqueo.find(v => v.placa === placa && v.estado === "dentro");

    if (existe) {
        alert("El vehículo ya está dentro");
        return;
    }

    parqueo.push({
        placa: placa,
        hora: new Date().toLocaleTimeString(),
        estado: "dentro"
    });

    document.getElementById("resultado").innerText = "Entrada registrada";
}

// REGISTRAR SALIDA
function salida() {
    let placa = document.getElementById("placa").value;

    let vehiculo = parqueo.find(v => v.placa === placa && v.estado === "dentro");

    if (!vehiculo) {
        alert("Vehículo no encontrado");
        return;
    }

    vehiculo.estado = "fuera";

    document.getElementById("resultado").innerText = "Salida registrada";
}

// MOSTRAR VEHÍCULOS
function mostrar() {
    if (tipoUsuario !== "admin") {
        alert("No tiene permisos");
        return;
    }

    let lista = parqueo
        .filter(v => v.estado === "dentro")
        .map(v => v.placa + " - " + v.hora)
        .join("\n");

    document.getElementById("resultado").innerText = lista || "No hay vehículos";
}