let pontosEquipe1 = 0;
let pontosEquipe2 = 0;
let vencedores = [];

function aumentarPontos(equipe, quantidade) {
  if (equipe === 'equipe1') {
    pontosEquipe1 += quantidade;
    document.getElementById('pontosEquipe1').textContent = pontosEquipe1;
  } else if (equipe === 'equipe2') {
    pontosEquipe2 += quantidade;
    document.getElementById('pontosEquipe2').textContent = pontosEquipe2;
  }
  if (pontosEquipe1 >= 12) {
    let nomeEquipe1 = document.getElementById("nomeEquipe1").value
    let resultado = document.getElementById("vencedor")
    resultado.innerHTML = "Vencedor: " + nomeEquipe1
    vencedores.push(nomeEquipe1);
    atualizarVencedores();
    reiniciarJogo();
  } else if (pontosEquipe2 >= 12) {
    let nomeEquipe2 = document.getElementById("nomeEquipe2").value
    let resultado = document.getElementById("vencedor")
    resultado.innerHTML = "Vencedor: " + nomeEquipe2
    vencedores.push(nomeEquipe2);
    atualizarVencedores();
    reiniciarJogo();
  }
}

function reiniciarJogo() {
  pontosEquipe1 = 0;
  pontosEquipe2 = 0;
  document.getElementById('pontosEquipe1').textContent = pontosEquipe1;
  document.getElementById('pontosEquipe2').textContent = pontosEquipe2;
}

function zerarPontos1() {
  pontosEquipe1 = 0;
  document.getElementById('pontosEquipe1').textContent = pontosEquipe1;
}

function zerarPontos2() {
  pontosEquipe2 = 0;
  document.getElementById('pontosEquipe2').textContent = pontosEquipe2;
}

var inputElement = document.getElementById('nomeEquipe1');
var valorMostradoElement = document.getElementById('nome1');

inputElement.addEventListener('input', function() {
  var valorInput = inputElement.value;
  valorMostradoElement.textContent = valorInput;
});

var inputElement2 = document.getElementById('nomeEquipe2');
var valorMostradoElement2 = document.getElementById('nome2');

inputElement2.addEventListener('input', function() {
  var valorInput2 = inputElement2.value;
  valorMostradoElement2.textContent = valorInput2;
});

function atualizarVencedores() {
  let vencedoresElement = document.getElementById('vencedores');
  vencedoresElement.innerHTML = 'Vencedores: ' + vencedores.join(', ');
}
