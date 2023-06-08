const button = document.getElementById("myButton");


button.addEventListener("mouseenter", function(event) {
    const x = event.clientX;
    const y = event.clientY;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxX = windowWidth - buttonWidth;
    const maxY = windowHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});

function handleClick() {
    alert("¡Gracias Bby!");
}