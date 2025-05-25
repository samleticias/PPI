function mudarTitulo() {
  document.getElementById("titulo").textContent = "Novo Título";
}

function listarParagrafos() {
  const paragrafos = document.getElementsByTagName("p");
  for (let i = 0; i < paragrafos.length; i++) {
    alert(paragrafos[i].textContent);
  }
}