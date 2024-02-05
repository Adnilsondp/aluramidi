

// Função para tocar som com base no ID do elemento de áudio
function tocarSom(idElementoAudio) {
    // Encontra o elemento de áudio com o ID e o reproduz
    document.querySelector(idElementoAudio).play();
}

// Pega todas as teclas na página que têm a classe 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla');

// Contador para ajudar a percorrer a lista de teclas
let contador = 0;

// Um loop que vai passar por cada tecla na lista
while (contador < listaDeTeclas.length) {

    // Pega a tecla atual
    const tecla = listaDeTeclas[contador];

    // Pega a classe que representa o instrumento associado à tecla
    const instrumento = tecla.classList[1];

    // Cria o ID do elemento de áudio usando o nome do instrumento
    const idAudio = `#som_${instrumento}`;

    // Adiciona uma ação quando a tecla é clicada
    tecla.onclick = function () {
        // Chama a função tocarSom com o ID do áudio
        tocarSom(idAudio);
    }

    // Move para a próxima tecla na próxima vez que o loop acontecer
    contador = contador + 1;
}

