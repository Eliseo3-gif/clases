let carrito = [];
let total = 0;

// Función para abrir/cerrar el carrito
function toggleCarrito() {
    document.getElementById('carrito-lateral').classList.toggle('active');
}

// Función para añadir productos
function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarInterfaz();
    
    // Feedback visual opcional
    alert(`${nombre} añadido al carrito`);
}

function actualizarInterfaz() {
    const contenedor = document.getElementById('items-carrito');
    const contador = document.getElementById('contador-carrito');
    const totalTxt = document.getElementById('total-carrito');
    
    contenedor.innerHTML = '';
    total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;
        contenedor.innerHTML += `
            <div class="item-en-carrito">
                <div>
                    <p style="margin:0; font-weight:600;">${item.nombre}</p>
                    <p style="margin:0; color:var(--color-dorado);">$${item.precio.toFixed(2)}</p>
                </div>
                <button onclick="eliminarDelCarrito(${index})" style="background:none; border:none; color:red; cursor:pointer;">Eliminar</button>
            </div>
        `;
    });

    contador.innerText = carrito.length;
    totalTxt.innerText = total.toFixed(2);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarInterfaz();
}

function enviarWhatsApp() {
    if (carrito.length === 0) return alert("El carrito está vacío");
    
    let mensaje = "¡Hola! Quisiera hacer el siguiente pedido en La Cocina De Don Eliseo:\n\n";
    carrito.forEach(item => {
        mensaje += `- ${item.nombre} ($${item.precio.toFixed(2)})\n`;
    });
    mensaje += `\n*Total a pagar: $${total.toFixed(2)}*`;
    
    const url = `https://wa.me/50373019885?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}