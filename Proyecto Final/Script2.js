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