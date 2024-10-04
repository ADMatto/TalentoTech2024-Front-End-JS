// Solo para verificar si se conectó correctamente con el archivo .js
console.log('Archivo JS enlazado');

// Definimos path donde se encuentran las imagenes
const imgBasePath = 'images/';
// Se seleccionan todas las img con el atributo 'data-src'
const images = document.querySelectorAll('img[data-src]');
// Se recorren los elementos img seleccionados y se le agrega el path de las imagenes
images.forEach(img => {
    img.src = imgBasePath + img.getAttribute('data-src');
});

// Se le agrega una accion, al hacer click, al h1 
document.querySelector('h1').addEventListener('click', function() {
    console.log('El encabezado fue clickeado.');
});