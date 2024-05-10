// script.js

document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll('.parallax').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const numFlakes = 100; // Cantidad de copos de nieve

    for (let i = 0; i < numFlakes; i++) {
        createFlake();
    }

    function createFlake() {
        const flake = document.createElement("div");
        flake.className = "snowflake";
        flake.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en el ancho de la ventana
        flake.style.animationDuration = (Math.random() * 5 + 5) + "s"; // Duración de la animación aleatoria entre 5 y 10 segundos
        flake.style.animationDelay = -Math.random() * 10 + "s"; // Retardo de la animación aleatorio entre -10 y 0 segundos
        flake.style.top = -Math.random() * 100 + "vh"; // Posición inicial arriba de la ventana
        document.querySelector(".snowflakes").appendChild(flake);
    }
});
