// 1 Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtener el campo de texto
    const nombre = input.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco

    // 2 Validar que el campo no esté vacío
    if (nombre === "") {
        alert("¡Hola!,Por favor, ingrese un nombre válido.");
        return;
    }

    // 3 Crear un elemento <li> para agregar a la lista
    const lista = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    lista.appendChild(nuevoAmigo);

    // 4 Limpiar el campo de texto después de agregar
    input.value = "";
}

// 5 Función para sortear un amigo aleatorio
function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const amigos = Array.from(lista.getElementsByTagName('li')); // Obtener todos los elementos <li>

    // 6 Validar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("¡Ups!,no hay nombres en la lista para sortear :(");
        return;
    }

    // 7 Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio].textContent;

    // 8 Mostrar el resultado en la sección de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">¡Tu amig@ secreto es!: <strong>${amigoSeleccionado}</strong></li>`;
}