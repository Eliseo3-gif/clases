document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const inputs = document.querySelectorAll('input');
    const userIn = inputs[0].value;
    const emailIn = inputs[1].value;
    const passIn = inputs[2].value;

    const resultado = registrarUsuario(userIn, emailIn, passIn);

    if (resultado === "Registro exitoso.") {
        alert("¡La cuenta ha sido creada exitosamente! Ahora puedes iniciar sesión.");
        window.location.href = "Login.html"; 
    } else {
        alert(resultado);
    }
});

function registrarUsuario(nuevoNombre, nuevoEmail, nuevaPassword) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    if (usuarios.find(u => u.username === nuevoNombre)) {
        return "El nombre de usuario ya existe.";
    }
    
    usuarios.push({ 
        username: nuevoNombre, 
        email: nuevoEmail, 
        password: nuevaPassword 
    });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    return "Registro exitoso.";
}
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userIn = document.getElementById('loginUser').value;
    const passIn = document.getElementById('loginPassword').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioValido = usuarios.find(u => u.username === userIn && u.password === passIn);

    if (usuarioValido) {
        alert("Bienvenido/a, " + userIn );
    
        sessionStorage.setItem('usuarioSesion', userIn);
        
        // Redirigimos
        window.location.href = "PaginaPrincipal.html";
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, verifique los datos ingresados.");
    }
});