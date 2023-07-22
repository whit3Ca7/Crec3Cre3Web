const imagenes = ["./img/baner.jpg", "./img/baner2.jpg", "./img/baner3.jpg"];
let indice = 0;
const sliderImg = document.getElementById("sliderImg");
const anteriorBtn = document.getElementById("anteriorBtn");
const siguienteBtn = document.getElementById("siguienteBtn");

function cambiarImagen(indice) {
    sliderImg.src = imagenes[indice];
    indice = (indice + 1) % imagenes.length;
}

anteriorBtn.addEventListener("click", function() {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    cambiarImagen(indice);
});

siguienteBtn.addEventListener("click", function() {
    indice = (indice + 1) % imagenes.length;
    cambiarImagen(indice);
});
