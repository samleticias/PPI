function inserir() {
  const texto = document.getElementById("item").value;
  const option = document.createElement("option");
  option.text = texto;
  document.getElementById("listaSelect").add(option);
}