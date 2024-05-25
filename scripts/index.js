const corpo = document.querySelector("body");

const botao_escuro = document.querySelector(".mudar-escuro");

const cabecalio = document.querySelector(".cabecalio")

const texto_h1 = document.querySelector("h1");

const publicacao = document.querySelector(".publicacao");




function mudar_tema_escuro() {
    corpo.style.backgroundImage = "url('/imgs/img-plano-b-tema-escuro.jpg')";
    cabecalio.style.backgroundColor = "white"
    texto_h1.style.color = "white"
}

function mudar_tema_claro() {
    corpo.style.backgroundImage = "url('/imgs/img-plano-b-tema-claro.jpg')";
    cabecalio.style.backgroundColor = "black"
    texto_h1.style.color = "black"
}

function mudar_img() {
    publicacao.src = "/imgs/imagem-publi-2.png"

}