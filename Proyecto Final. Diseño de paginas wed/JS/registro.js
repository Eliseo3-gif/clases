const formRegistro = document.getElementById('formRegistro');

formRegistro.addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('regUser').value;
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPassword').value;

    let usuarios = JSON.parse(localStorage.getItem('bd_usuarios')) || [];

    const usuarioExistente = usuarios.find(u => u.email === email);
    if (usuarioExistente) {
        alert('Este correo electrónico ya está registrado. Intenta con otro o inicia sesión.');
        return;
    }

    const nuevoUsuario = {
        user: user,
        email: email,
        pass: pass
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('bd_usuarios', JSON.stringify(usuarios));

    alert('Registro exitoso Ahora puedes iniciar sesión.');
    
    window.location.href = 'Login.html';
});