// Solo para verificar si se conectó correctamente con el archivo .js
console.log('Archivo JS enlazado');
let carrito = [];


// Definimos path donde se encuentran las imagenes
const imgBasePath = 'images/';
// Se seleccionan todas las img con el atributo 'data-src'
const images = document.querySelectorAll('img[data-src]');
// Se recorren los elementos img seleccionados y se le agrega el path de las imagenes
images.forEach(img => {
    img.src = imgBasePath + img.getAttribute('data-src');
});

// Funciones
function agregarAlCarrito(sku, nombre, precio) {
    const inputCantidad = document.querySelector(`input.cant[sku="${sku}"]`);
    let cantidad = parseInt(inputCantidad.value);
    const productoExistente = carrito.find(item => item.sku === sku);
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        const producto = {sku, nombre, precio, cantidad}
        carrito.push(producto);
    }
    actualizarCarrito();
}
function actualizarCantidad(event) {
    const input = event.target;
    const sku = input.getAttribute('data-sku');
    const nuevaCantidad = parseInt(input.value);

    const producto = carrito.find(item => item.sku === sku);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        actualizarCarrito();
    }
}
function eliminarDelCarrito(event) {
    const button = event.target;
    const sku = button.getAttribute('data-sku');

    carrito = carrito.filter(producto => producto.sku !== sku);
    actualizarCarrito();
}

function actualizarCarrito(){
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    let total = 0;
    carrito.forEach( producto => {
        const item = document.createElement('li');
        item.innerHTML = ` ${producto.nombre} - $${producto.precio} x <input type="number" value="${producto.cantidad}"
         min="1" class="cantidad-carrito" data-sku="${producto.sku}"> <button class="eliminar-carrito" data-sku="${producto.sku}">Eliminar</button> `;
        listaCarrito.appendChild(item);

        total += producto.precio * producto.cantidad;
    })
    document.getElementById('total-carrito').textContent = total;

    document.querySelectorAll('.cantidad-carrito').forEach(input =>{
        input.addEventListener('change', actualizarCantidad);
    });
    document.querySelectorAll('.eliminar-carrito').forEach(button => {
        button.addEventListener('click', eliminarDelCarrito);
    });
        
}
// ---------
document.getElementById('pagar').addEventListener('click', function(){
    alert('Gracias por su compra! Lo redireccionamos para realizar el pago!');
})

// Se le agrega una accion, al hacer click, al h1 
document.querySelector('h1').addEventListener('click', function() {
    console.log('El encabezado fue clickeado.');
});
const resenas = [
    {
        cliente: "Florencia Sanches",
        mensaje: "Todo muy cute!! quiero todo!!",
        estrellas: 5
    },
    {
        cliente: "Juan Perez",
        mensaje: "Super recomendado 10/10!",
        estrellas: 5
    },
    {
        cliente: "Maria Levis",
        mensaje: "Me llego el peluche de totoro y supero mis espectativas!",
        estrellas: 5
    },
    {
        cliente: "Alejandro Rodriguez",
        mensaje: "El Totoro Abrazable es perfecto compañero de siestas y secretos. Suaves y reconfortantes abrazos garantizados.",
        estrellas: 5
    },
    {
        cliente: "Julio Rondan",
        mensaje: "El Calcifer Llamita Vivaz se siente el calorcito en tus manos, chispeante y siempre animado. ¡Un encanto único!",
        estrellas: 5
    },
    {
        cliente: "Gabriel Burgos",
        mensaje: "El Gatobus Aventura listo para cualquier viaje imaginario. Su carita es pura alegría.",
        estrellas: 5
    },
    {
        cliente: "David Arganaraz",
        mensaje: "El Kodama Bosque es silencioso pero curioso. Ideal para añadir misterio y magia al ambiente.",
        estrellas: 4
    },
    {
        cliente: "Julian Ramirez",
        mensaje: "El No-Face Místico es solitario pero fiel. Un abrazo suyo alivia cualquier tristeza.",
        estrellas: 4
    },
    {
        cliente: "Carolina Díaz",
        mensaje: "La atención al cliente fue excelente, y los productos son de muy buena calidad.",
        estrellas: 5
    },
    {
        cliente: "Ricardo Fernández",
        mensaje: "El envío fue rápido y sin problemas. Muy satisfecho con mi compra.",
        estrellas: 5
    },
    {
        cliente: "Sofía Gómez",
        mensaje: "Los productos son adorables, pero me gustaría más variedad.",
        estrellas: 4
    },
    { 
        cliente: "Martín López",
        mensaje: "Buena calidad, pero el precio es un poco alto.",
        estrellas: 3
    }
]
const productos = [
    {
        nombre: "Peluche Totoro gris",
        descripcion: "Este adorable peluche de Totoro, el icónico guardián del bosque de Mi Vecino Totoro, esperfecto para los fanáticos del Studio Ghibli. De gran tamaño, su suave textura y suentrañable expresión te harán sentir como si estuvieras en el corazón del bosque. Totoro esideal para abrazar, decorar tu habitación o como compañero en todas tus aventuras mágicas.",
        sku: "t01",
        imagen: "totoro1.jpg",
        precio: "15000"
    },
    {
        nombre: "Peluche Totoro celeste",
        descripcion: "Ligeramente más pequeño que el gran Totoro, el Totoro Azul es igual de encantador. Este fiel compañero, con su característico color azul, añade un toque de ternura a cualquier colección. Su tamaño compacto lo hace perfecto para llevar a cualquier lugar o como parte de una decoración mágica.",
        sku: "t02",
        imagen: "totoro2.jpg",
        precio: "13000"
    },
    {
        nombre: "Peluche Totoro blanco",
        descripcion: "El más pequeño de la familia Totoro, el Totoro Blanco, es un peluche compacto que cabe en la palma de tu mano. Con su diseño minimalista y su expresión dulce, es el accesorio perfecto para llevar contigo o como un detalle decorativo en tu espacio. Este peluche es indispensable para los coleccionistas y amantes de la ternura.",
        sku: "t03",
        imagen: "totoro3.jpg",
        precio: "12000"
    },
    {
        nombre: "Peluche Gato de Kiki's Delivery Service",
        descripcion: "",
        sku: "k01",
        imagen: "kiki1.jpg",
        precio: "12000"
    },
    {
        nombre: "Peluche Gatobus de Totoro",
        descripcion: "",
        sku: "t04",
        imagen: "buscat1.jpg",
        precio: "12000"
    },
    {
        nombre: "Peluche Faceless de Viaje de Chihiro",
        descripcion: "",
        sku: "c01",
        imagen: "faceless1.jpg",
        precio: "12000"
    },
    {
        nombre: "Peluche Calcifer de Castillo Vagabundo",
        descripcion: "",
        sku: "h01",
        imagen: "calsifer1.jpg",
        precio: "12000"
    },
    {
        nombre: "Peluche Ratita de Viaje de Chihiro",
        descripcion: "chihiro2.jpg",
        sku: "c02",
        imagen: "chihiro2.jpg",
        precio: "17000"
    }
]
let productosHTML = "";
for (let i = 0; i < productos.length; i++){
    productosHTML += `
                    <div class="producto">
                        <h3>${productos[i].nombre}</h3>
                        <img src="images/${productos[i].imagen}">
                        <p class="sku">sku: ${productos[i].sku}</p>
                        <p class="precio">Precio: $${productos[i].precio}</p>
                        <input type="number" min="1" class="cant" value=1 sku="${productos[i].sku}">
                        <button onclick="agregarAlCarrito('${productos[i].sku}','${productos[i].nombre}', '${productos[i].precio}', 1 )">Agregar al carrito</button>
                    </div>
                    `;
}


const contenedorProductos = document.querySelector("#productos-grid");
console.log(productosHTML)
contenedorProductos.innerHTML = productosHTML;

function generarEstrellas(cantidad) {
    return '⭐️'.repeat(cantidad);
}

const cantidadResenas = document.querySelector("#cantidad-resenas");
cantidadResenas.textContent = resenas.length + " reseñas";


function calcularPromedio(resenas) {
    const totalEstrellas = resenas.reduce((total, resena) => total + resena.estrellas, 0);
    return (totalEstrellas / resenas.length).toFixed(2);
}
const promedioEstrellas = document.querySelector("#cantidad-estrellas");
var estrellas = calcularPromedio(resenas);
console.log(estrellas);
promedioEstrellas.textContent = generarEstrellas(estrellas) +' '+ estrellas + '/5';

let resenasHTML = "";
for (let i = 0; i < resenas.length; i++){
    resenasHTML += `
        <div class="resena">
            <p>${resenas[i].cliente}:</p>
            <p>${resenas[i].mensaje}</p>
            <p>${generarEstrellas(resenas[i].estrellas)}</p>
        </div>
    `;
}
const contenedorResenas = document.querySelector("#resenas-grid");
contenedorResenas.innerHTML = resenasHTML;