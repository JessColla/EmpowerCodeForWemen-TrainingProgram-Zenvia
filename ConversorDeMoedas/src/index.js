function Converter() {
  var valorDigitado = parseFloat(document.getElementById("valor").value);
  var selectedNada = parseFloat(document.getElementById("nada").value);
  var selectedEuro = document.getElementById("euro");
  var selectedDolar = document.getElementById("dolar");
  var selectedLibra = document.getElementById("libra");
  var selectedPeso = document.getElementById("pesos");

  //Cotação do dia 15/08/2022
  var valorEmEuro = valorDigitado * 5.18;
  var valorEmDolar = valorDigitado * 5.1;
  var valorEmLibra = valorDigitado * 6.15;
  var valorEmPeso = valorDigitado * 0.038;
  var valorConvertido = document.getElementById("valorConvertido");

  if (selectedNada) {
    alert("Informe um valor");
  } else if (selectedEuro) {
    valorConvertido.innerHTML = valorEmEuro.toFixed(2);
  } else if (selectedDolar) {
    valorConvertido.innerHTML = valorEmDolar.toFixed(2);
  } else if (selectedLibra) {
    valorConvertido.innerHTML = valorEmLibra.toFixed(2);
  } else if (selectedPeso) {
    valorConvertido.innerHTML = valorEmPeso.toFixed(2);
  }
}
