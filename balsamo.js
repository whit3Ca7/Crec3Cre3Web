const imagenes = ["./img/SavioBalsamo23.png", "./img/SavioBalsamo2.png"];
let indice = 0;
const sliderImg = document.getElementById("sliderImg");
const anteriorBtn = document.getElementById("anteriorBtnimg");
const siguienteBtn = document.getElementById("siguienteBtnimg");

function cambiarImagen(indice) {
    sliderImg.src = imagenes[indice];
    indice = (indice + 1) % imagenes.length;
}

anteriorBtn.addEventListener("click", function () {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    cambiarImagen(indice);
});

siguienteBtn.addEventListener("click", function () {
    indice = (indice + 1) % imagenes.length;
    cambiarImagen(indice);
});
