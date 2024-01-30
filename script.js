const btnPlayPause = document.querySelector("#play-pause");
const btnNext = document.querySelector("#proximo");
const btnBack = document.querySelector("#anterior");
const titleCapitulo = document.querySelector("#capitulo");
const audioCapitulo = document.querySelector("#audio-capitulo");
const qtdCapitulos = 10;

let playing = 0;
let currentCapitulo = 1;

function playFaixa(){
    audioCapitulo.play();
    playing = 1;

    btnPlayPause.classList.remove("bi-play-circle-fill");
    btnPlayPause.classList.add("bi-pause-circle-fill");
}

function pauseFaixa() {
    audioCapitulo.pause();
    playing = 0;

    btnPlayPause.classList.remove("bi-pause-circle-fill");
    btnPlayPause.classList.add("bi-play-circle-fill");
}

function playOrPause() {
    if (playing === 0) {
        playFaixa();
    } else {
        pauseFaixa();
    }
}

function changeTitleCapitulo() {
    titleCapitulo.innerText = `Capítulo ${currentCapitulo}`;
}

function nextFaixa() {
    if (currentCapitulo === qtdCapitulos){
        currentCapitulo = 1;
    } else {
        currentCapitulo++;
    }

    audioCapitulo.src = `./books/dom-casmurro/${currentCapitulo}.mp3`;
    changeTitleCapitulo();
    playFaixa();
}

function backFaixa() {
    if (currentCapitulo === 1){
        currentCapitulo = qtdCapitulos;
    } else {
        currentCapitulo--;
    }

    audioCapitulo.src = `./books/dom-casmurro/${currentCapitulo}.mp3`;
    changeTitleCapitulo();
    playFaixa();
}

btnPlayPause.addEventListener("click", playOrPause);
btnNext.addEventListener("click", nextFaixa);
btnBack.addEventListener("click", backFaixa);

