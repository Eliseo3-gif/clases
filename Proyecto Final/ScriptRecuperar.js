let usuarioEncontrado = null;

document.getElementById('recoveryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const emailIn = document.getElementById('recoveryEmail').value;
    const newPassField = document.getElementById('newPassword');
    const container = document.getElementById('newPassContainer');
    const btn = document.getElementById('btnAction');

    // Traemos los usuarios de la base de datos local
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (!usuarioEncontrado) {
        // PASO 1: Verificar si el correo existe
        usuarioEncontrado = usuarios.find(u => u.email === emailIn);

        if (usuarioEncontrado) {
            alert("Usuario verificado. Por favor, introduce tu nueva contraseña.");
            // Mostramos el campo de la nueva contraseña
            container.style.display = "block";
            newPassField.setAttribute("required", "true");
            document.getElementById('recoveryEmail').readOnly = true;
            btn.innerText = "Actualizar Contraseña";
        } else {
            alert("El correo electrónico no coincide con ninguna cuenta registrada.");
        }
    } else {
        // PASO 2: Actualizar la contraseña
        const nuevaClave = newPassField.value;

        if (nuevaClave.length < 4) {
            alert("La contraseña es muy corta.");
            return;
        }

        // Actualizamos la contraseña en el array global
        usuarios = usuarios.map(u => {
            if (u.email === usuarioEncontrado.email) {
                return { ...u, password: nuevaClave };
            }
            return u;
        });

        // Guardamos los cambios
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert("Contraseña actualizada con éxito. Serás redirigido al login.");
        window.location.href = "Login.html";
    }
});