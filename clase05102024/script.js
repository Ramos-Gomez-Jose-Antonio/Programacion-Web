const app = document.getElementById('app');

// Crear campo de nombre de usuario
const usernamelabel = document.createElement('label');
usernamelabel.textContent = 'Nombre: ';
app.appendChild(usernamelabel);

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
app.appendChild(usernameInput);

// Crear campo de ocupación
const ocuplabel = document.createElement('label');
ocuplabel.textContent = 'Ocupación: ';
app.appendChild(ocuplabel);

const ocupInput = document.createElement('input');
ocupInput.type = 'text';
ocupInput.required = true;
app.appendChild(ocupInput);

// Crear campo de selección de color
const inputColor = document.createElement('input');
inputColor.type = 'color';
inputColor.value = '#ff5733';
inputColor.style.marginRight = '10px';
app.appendChild(inputColor);

// Crear el botón para generar el contenedor con los datos
const botonCrearContenedor = document.createElement('button');
botonCrearContenedor.innerText = 'Crear Contenedor';
botonCrearContenedor.style.padding = '10px 15px';
botonCrearContenedor.style.backgroundColor = '#4CAF50';
botonCrearContenedor.style.color = 'white';
botonCrearContenedor.style.border = 'none';
botonCrearContenedor.style.borderRadius = '5px';
botonCrearContenedor.style.cursor = 'pointer';
app.appendChild(botonCrearContenedor);

// Crear el contenedor para las tarjetas
const tarjetasContainer = document.createElement('div');
tarjetasContainer.style.display = 'flex';
tarjetasContainer.style.flexWrap = 'wrap';
tarjetasContainer.style.gap = '10px';
app.prepend(tarjetasContainer); // Colocar el contenedor de tarjetas en la parte superior

// Función para crear el contenedor con nombre, ocupación y color
const crearContenedor = () => {
    const nombre = usernameInput.value;
    const ocupacion = ocupInput.value;
    const color = inputColor.value;

    // Validar que se hayan ingresado todos los datos
    if (!nombre || !ocupacion) {
        alert('Por favor, ingrese el nombre y la ocupación.');
        return;
    }

    // Crear el contenedor de la tarjeta
    const contenedorDinamico = document.createElement('div');
    contenedorDinamico.style.width = '300px';
    contenedorDinamico.style.backgroundColor = color;
    contenedorDinamico.style.border = '2px solid #ddd';
    contenedorDinamico.style.borderRadius = '10px';
    contenedorDinamico.style.padding = '10px';
    
    // Alinear elementos en orientación vertical
    contenedorDinamico.style.display = 'flex';
    contenedorDinamico.style.flexDirection = 'column';

    // Crear elementos de texto para nombre y ocupación con negrita
    const textoNombre = document.createElement('p');
    textoNombre.innerText = `Nombre: ${nombre}`;
    textoNombre.style.fontWeight = 'bold';

    const textoOcupacion = document.createElement('p');
    textoOcupacion.innerText = `Ocupación: ${ocupacion}`;
    textoOcupacion.style.fontWeight = 'bold';

    // Crear el botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.innerText = 'Eliminar';
    botonEliminar.style.padding = '5px 10px';
    botonEliminar.style.backgroundColor = '#cbcbcb';
    botonEliminar.style.color = 'white';
    botonEliminar.style.border = 'none';
    botonEliminar.style.borderRadius = '5px';
    botonEliminar.style.cursor = 'pointer';
    botonEliminar.style.marginTop = '10px';

    // Evento para eliminar el contenedor específico
    botonEliminar.onclick = () => {
        tarjetasContainer.removeChild(contenedorDinamico);
    };

    // Añadir los elementos al contenedor
    contenedorDinamico.appendChild(textoNombre);
    contenedorDinamico.appendChild(textoOcupacion);
    contenedorDinamico.appendChild(botonEliminar);

    // Añadir el contenedor al DOM al final del contenedor de tarjetas
    tarjetasContainer.appendChild(contenedorDinamico);

    // Limpiar los campos de entrada
    usernameInput.value = '';
    ocupInput.value = '';
};

// Asignar la función de creación al botón
botonCrearContenedor.onclick = crearContenedor;
