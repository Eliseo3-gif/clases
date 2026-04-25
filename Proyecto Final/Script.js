
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const userIn = document.getElementById('loginUser').value;
    const passIn = document.getElementById('loginPass').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioValido = usuarios.find(u => u.username === userIn && u.password === passIn);

    if (usuarioValido) {
        alert("¡Bienvenido, " + userIn + "!");
        window.location.href = "PaginaPrincipal.html";
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, regístrate si no tienes cuenta.");
    }
});

function registrarUsuario(nuevoNombre, nuevaPassword) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    if (usuarios.find(u => u.username === nuevoNombre)) {
        return "El nombre de usuario ya está en uso.";
    }

    usuarios.push({ username: nuevoNombre, password: nuevaPassword });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return "Registro exitoso.";
}
