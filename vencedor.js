window.onload = function() {
  var nomeVencedor = localStorage.getItem('vencedor');
  document.getElementById('nomeVencedor').textContent = nomeVencedor + ' venceu!';
}
