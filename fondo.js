// Funcion para generar colores aleatorios
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Cambia el color de fondo de la página
function cambiarColorFondo() {
    document.body.style.backgroundColor = getRandomColor();
}

// Asigna el evento de clic al botón
document.getElementById('colorButton').addEventListener('click', cambiarColorFondo);
