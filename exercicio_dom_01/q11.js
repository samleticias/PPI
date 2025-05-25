function adicionar() {
  const texto = document.getElementById("texto").value;
  const li = document.createElement("li");
  li.textContent = texto;
  document.getElementById("lista").appendChild(li);
}