var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var eletementoResutltado = document.getElementById("resultado");

  if (chute === numeroSecreto) {
    eletementoResutltado.innerHTML = "Você acertou";
  } else if (chute !== numeroSecreto) {
    eletementoResutltado.innerHTML = "Você errou ";
  } else if (chute > 10 || chute < 10) {
    eletementoResutltado.innerHTML = "Você deve digitar um número de 0 á 10";
  }
}
