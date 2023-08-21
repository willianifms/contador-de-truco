let pontosEquipe1 = 0;
let pontosEquipe2 = 0;

function aumentarPontos(equipe, quantidade) {
  if (equipe === 'equipe1') {
    pontosEquipe1 += quantidade;
    document.getElementById('pontosEquipe1').textContent = pontosEquipe1;
  } else if (equipe === 'equipe2') {
    pontosEquipe2 += quantidade;
    document.getElementById('pontosEquipe2').textContent = pontosEquipe2;
  }
  
  if (pontosEquipe1 >= 12) {
    localStorage.setItem('vencedor', document.getElementById('nomeEquipe1').value || 'Equipe 1');
    window.location.href = 'vencedor.html';
  } else if (pontosEquipe2 >= 12) {
    localStorage.setItem('vencedor', document.getElementById('nomeEquipe2').value || 'Equipe 2');
    window.location.href = 'vencedor.html';
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
