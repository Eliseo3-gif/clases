// =============================================
//   CARRITO DE COMPRAS - La Cocina De Don Eliseo
// =============================================

function agregarCarrito(nombre, precio) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const existente = carrito.find(item => item.nombre === nombre);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    mostrarNotificacion(nombre);
}

function actualizarContador() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const contador = document.getElementById('contador-carrito');
    if (contador) {
        contador.textContent = total;
        contador.style.transform = 'scale(1.4)';
        setTimeout(() => contador.style.transform = 'scale(1)', 200);
    }
}

function mostrarNotificacion(nombre) {
    let notif = document.getElementById('notif-carrito');
    if (!notif) {
        notif = document.createElement('div');
        notif.id = 'notif-carrito';
        notif.style.cssText = `
            position: fixed; bottom: 30px; right: 30px;
            background: #2d6a2d; color: white;
            padding: 12px 20px; border-radius: 10px;
            font-weight: 600; font-size: 0.9rem;
            box-shadow: 0 4px 16px rgba(0,0,0,0.2);
            z-index: 9999; transition: opacity 0.4s;
            pointer-events: none;
        `;
        document.body.appendChild(notif);
    }
    notif.textContent = `✅ "${nombre}" añadido al carrito`;
    notif.style.opacity = '1';
    clearTimeout(notif._timer);
    notif._timer = setTimeout(() => notif.style.opacity = '0', 2500);
}

function toggleCarrito() {
    window.location.href = 'Carrito.html';
}

// Inicializar contador al cargar la página
document.addEventListener('DOMContentLoaded', actualizarContador);