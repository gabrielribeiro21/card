const cards = document.querySelectorAll('.slide');

const botaoUm = document.querySelector('.um');
const botaoDois = document.querySelector('.dois');
const botaoTres = document.querySelector('.tres');
const botaoQuatro = document.querySelector('.quatro');
const botaoCinco = document.querySelector('.cinco');
const botaoVoltar = document.querySelector('.btn-voltar')


function trocarCard(exibirElemento, ocultarElemento) {
    exibirElemento.style.display = "flex";
    ocultarElemento.style.display = "none";
}

botaoUm.addEventListener('click', () => {
    trocarCard(cards[1], cards[0])    
});

botaoDois.addEventListener('click', () => {
    trocarCard(cards[2], cards[0])    
});

botaoTres.addEventListener('click', () => {
    trocarCard(cards[3], cards[0])    
});

botaoQuatro.addEventListener('click', () => {
    trocarCard(cards[4], cards[0])    
});

botaoCinco.addEventListener('click', () => {
    trocarCard(cards[5], cards[0])    
});



function cardPrincipal(exibirCard, ocultarCard) {
    exibirCard.style.display = "flex";
    ocultarCard.style.display = "none";
}


botaoVoltar.addEventListener('click', cardPrincipal);

