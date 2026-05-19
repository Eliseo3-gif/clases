let biblioteca = [];

function addLibro(titulo, autor, genero){
    return{
        titulo: titulo,
        autor: autor,
        genero: genero,
    };
}

function addLibro(){
    let titulo = document.getElementById("titulo").Value;
    let autor= document.getElementById("autor").Value;
    let genero = document.getElementById("genero").Value;

    if(titulo ===''|| autor === ''){
        alert('Llena todos los campos de manera correcta');
        return;
    }
    
    let libro = addLibro(titulo, autor, genero);
    biblioteca.push(libro);

    document.getElementById("titulo").value = '';
    document.getElementById("autor").value = '';

    alert('Libro registrado existosamente:' + libro.titulo);
    mostrarTodos();
}

function mostrarTodos(){
    let listaLibros = document.getElementById("listaLibros");
    listaLibros.innerHTML == '';

    if (biblioteca.length === 0){
        listaLibros.innerHTML = 'No existen libros en la biblioteca'; 
        return;
    }

    biblioteca.forEach(function(libro, index){
        let lib = document.createElement('div');
        lib.className = 'libro-item';
        lib.innerHTML = `Libro ${index + 1}: ${libro.titulo} de ${libro.autor} (${libro.genero})`;
        listaLibros.appendChild(lib);
    });
}

function eliminarlibros(){
    if(biblioteca.length > 0){
        let eliminarlibro = biblioteca.pop();
        alert('El libro eliminado es:' + eliminarlibro.titulo);
        mostrarTodos();
    }else{
        alert('No hay libros que eliminar');
    }
}

function filtrarPorGenero(){
    let genero = prompt('Introduce un genero');
    if(!genero) return;

    let listaFiltrado = document.getElementById("listaLibros");
    listaFiltrado.innerHTML = '';

    let librosFiltrados = biblioteca.filter(function(libro){
        return libro.genero.toLowerCase() === genero.toLowerCase();
    });

    if(librosFiltrados.length === 0){
        listaFiltrado.innerHTML = 'No existe libro con este tipo de genero:' + genero;
        return;
    }
    librosFiltrados.forEach(function(libro, index){
        let lib = document.createElement('div');
        lib.innerHTML = `Libro ${index + 1}: ${libro.titulo} de ${libro.autor} (${libro.genero})`;
        listaFiltrado.appendChild(lib);
    });
}

function resumen(){
    let genero = new Set(biblioteca.map(function(libro){
        return libro.genero;
    }));

    let resumen = 'Resumen';
    genero.forEach(function(genero){
        let cantidad = biblioteca.filter(function(libro){
            return libro.genero === genero;
        }).length;
        resumen += `${genero}: ${cantidad} Libros`;
    });
    alert(resumen);
}