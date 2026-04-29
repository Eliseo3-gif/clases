document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Capturamos los inputs del formulario
    // Usamos querySelector porque en tu HTML original no tenías IDs
    const inputs = document.querySelectorAll('input');
    const userIn = inputs[0].value;  // Nombre de Usuario
    const emailIn = inputs[1].value; // Email
    const passIn = inputs[2].value;  // Contraseña

    // Llamamos a la función de registro
    const resultado = registrarUsuario(userIn, emailIn, passIn);

    if (resultado === "Registro exitoso.") {
        alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
        // Redirigir al login después de registrarse (cambia el nombre según tu archivo)
        window.location.href = "Login.html"; 
    } else {
        alert(resultado);
    }
});

function registrarUsuario(nuevoNombre, nuevoEmail, nuevaPassword) {
    // 1. Obtener la lista de usuarios de localStorage (o crear una vacía)
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // 2. Validar si el usuario ya existe
    if (usuarios.find(u => u.username === nuevoNombre)) {
        return "El nombre de usuario ya está en uso.";
    }

    // 3. Agregar el nuevo usuario al array
    usuarios.push({ 
        username: nuevoNombre, 
        email: nuevoEmail, 
        password: nuevaPassword 
    });

    // 4. Guardar de nuevo en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    return "Registro exitoso.";
}
// Esperamos a que el formulario se envíe
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Obtenemos los valores de los cuadros de texto
    const userIn = document.getElementById('loginUser').value;
    const passIn = document.getElementById('loginPassword').value;

    // Traemos la lista de usuarios del localStorage (la "base de datos")
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Comparamos la información introducida
    const usuarioValido = usuarios.find(u => u.username === userIn && u.password === passIn);

    if (usuarioValido) {
        alert("¡Bienvenido, " + userIn + "!");
        
        // Guardamos quién entró para usarlo en la PaginaPrincipal (opcional)
        sessionStorage.setItem('usuarioSesion', userIn);
        
        // Redirigimos
        window.location.href = "PaginaPrincipal.html";
    } else {
        // Si no coincide nada, mandamos el error
        alert("Usuario o contraseña incorrectos. Por favor, verifica tus datos.");
    }
});