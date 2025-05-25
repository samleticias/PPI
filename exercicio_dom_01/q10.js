function calcular() {
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);
  const opcoes = document.getElementsByName("op");
  let op;

  for (let i = 0; i < opcoes.length; i++) {
    if (opcoes[i].checked) {
      op = opcoes[i].value;
      break;
    }
  }

  let resultado;
  switch (op) {
    case "+": resultado = n1 + n2; break;
    case "-": resultado = n1 - n2; break;
    case "*": resultado = n1 * n2; break;
    case "/": resultado = n1 / n2; break;
  }

  document.getElementById("res").textContent = "Resultado: " + resultado;
}