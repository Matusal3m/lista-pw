const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const mostrarResultado = document.getElementById("resultado");
const calcular = document.getElementById("calcular");

calcular.addEventListener("click", () => {
  const imc = (peso.value / (altura.value / 100) ** 2).toFixed(2);
  mostrarResultado.innerHTML = "";

  mostrarResultado.innerHTML = `
  Seu IMC é ${imc}
  <br>
  A classificação do seu IMC é: ${classificacao(imc)}`;
});

const classificacao = (imc) => {
  switch (true) {
    case (imc < 18.5):
      return "Abaixo do peso";
    case (imc >= 18.5 && imc < 24.9):
      return "Peso normal";
    case (imc >= 24.9 && imc < 29.9):
      return "Acima do peso";
    case (imc >= 29.9 && imc < 34.9):
      return "Obesidade I";
    case (imc >= 34.9 && imc < 39.9):
      return "Obesidade II";
    case (imc >= 40):
      return "Obesidade III";
  }
};
