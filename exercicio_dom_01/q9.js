let tamanho = 16;

function aumentar() {
  tamanho += 2;
  document.body.style.fontSize = tamanho + "px";
}

function diminuir() {
  tamanho -= 2;
  document.body.style.fontSize = tamanho + "px";
}