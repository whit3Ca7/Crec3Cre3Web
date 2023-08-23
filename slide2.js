const imagenes = ["./img/baner.jpg", "./img/baner2.jpg", "./img/baner3.jpg"];
let indice = 0;
const sliderImg = document.getElementById("sliderImg");
const anteriorBtn = document.getElementById("anteriorBtn");
const siguienteBtn = document.getElementById("siguienteBtn");

function cambiarImagen(indice) {
    sliderImg.src = imagenes[indice];
    indice = (indice + 1) % imagenes.length;
}

function avanzarImagen() {
    indice = (indice + 1) % imagenes.length;
    cambiarImagen(indice);
}

function retrocederImagen() {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    cambiarImagen(indice);
}

anteriorBtn.addEventListener("click", retrocederImagen);
siguienteBtn.addEventListener("click", avanzarImagen);

// Agregar automatización para cambiar las imágenes automáticamente
const intervalo = setInterval(avanzarImagen, 5000); // Cambia la imagen cada 3 segundos

// Detener la automatización cuando se hace clic en las flechas
anteriorBtn.addEventListener("click", () => clearInterval(intervalo));
siguienteBtn.addEventListener("click", () => clearInterval(intervalo));