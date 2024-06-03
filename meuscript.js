let slide = 1;

startSlider();

function startSlider() {
    setInterval(function () {
        nextSlide();
    }, 5000);
}

function nextSlide() {
    slide++;

    if (slide > 4) {
        slide = 1;
    }

    showSlide(slide);
}

function showSlide(index) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("radio" + i).checked = false;
    }

    document.getElementById("radio" + index).checked = true;
}

var imgAtual = "https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/01/fundo-transparente-png12.png?fit=696%2C396&ssl=1";
var imgAnterior = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/gura-gawr/sticker_6.png?d61a832bdd94297055c17a5c39fa70ad&d=200x200";

startJumpscare();

function startJumpscare() {
    setInterval(function () {
        trocar();
    }, 15000);
}

function trocar() {
    document.getElementById("figura").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
}