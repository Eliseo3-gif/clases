const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', function(e) {
    e.preventDefault();

    const loginUser = document.getElementById('loginUser').value;
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPass = document.getElementById('loginPassword').value;

    let usuarios = JSON.parse(localStorage.getItem('bd_usuarios')) || [];

    const usuarioValido = usuarios.find(u => 
        u.email === loginEmail && 
        u.pass === loginPass && 
        u.user === loginUser
    );

    if (usuarioValido) {
        alert(`¡Bienvenido de nuevo, ${usuarioValido.user}!`);
        localStorage.setItem('sesionActiva', JSON.stringify(usuarioValido));
        window.location.href = 'index.html';
    } else {
        alert('Datos incorrectos o usuario no encontrado. Verifica tu información.');
    }
});
