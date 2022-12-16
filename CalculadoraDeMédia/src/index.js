function calcularMedia() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);

  var somaNotas = nota1 + nota2 + nota3 + nota4;

  var media = somaNotas / 4;

  var notaFixada = Number(media.toFixed(1));

  var resultado = document.getElementById("resultado");

  if (notaFixada < 7) {
    resultado.innerHTML = "Reprovado";
  } else if (notaFixada >= 7) {
    resultado.innerHTML = "Aprovado";
  }
}
