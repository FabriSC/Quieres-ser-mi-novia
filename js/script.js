// se hace referencia al boton del html
const button = document.getElementById("myButton");


// se agrega un escuchador de eventos al boton, el evento se llama 'mouseToca'
button.addEventListener("mouseToca", function(event) {
    // se obtiene la posicion actual del cursor
    const x = event.clientX;
    const y = event.clientY;

    const anchoDelBoton = button.offsetWidth;
    const altoDelBoton = button.offsetHeight;

    const anchoDeLaVentana = window.innerWidth;
    const altoDeLaVentana = window.innerHeight;

    const maxX = anchoDeLaVentana - anchoDelBoton;
    const maxY = altoDeLaVentana - altoDelBoton ;

    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});

function handleClick() {
    alert("¡Sabia que no podrias decir que no bby!");
}