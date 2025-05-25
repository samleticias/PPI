const botao = document.getElementById("botao");
const limpar = document.getElementById("limpar");

botao.addEventListener("click", () => {
  document.getElementById("paragrafo").textContent = "O texto foi alterado!";
});

limpar.addEventListener("click", () => {
  document.getElementById("paragrafo").textContent = "";
});