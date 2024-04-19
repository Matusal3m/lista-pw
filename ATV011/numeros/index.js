const form = document.getElementById("form");
const numero = document.getElementById("numero");
const avisos = document.getElementById("avisos");

const valores = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (valores.includes(numero.value)) {
    alert("Valores repetidos, processo será repetido");
    while (valores.length > 0) {
      valores.pop();
    }
    numero.value = "";
    avisos.innerHTML = "Insira o primeiro valor";
    return;
  }
  valores.push(numero.value);

  avisos.innerHTML = pedirNumero(valores);
  numero.value = "";
});

const pedirNumero = (valores) => {
  switch (valores.length) {
    case 1:
      return "Insira o segundo valor";
    case 2:
      return "Insira o terceiro valor";
    default:
      form.style.display = "none";
      return `
      Os valores foram inseridos <br>
      O resultado foi: ${operarValores(valores)}
      `;
  }
};

const operarValores = (valores) => {
  const somaValores = valores.reduce(
    (accumulator, currentValue) =>
      parseInt(accumulator) + parseInt(currentValue)
  );
  const mediaValores = somaValores / valores.length;
  const produtoValores = valores.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);

  console.log({
    somaValores,
    mediaValores,
    produtoValores,
    menorValor,
    maiorValor,
  });

  return ` <br>
    soma: ${somaValores}, <br>
    media: ${mediaValores}, <br>
    produtos: ${produtoValores}, <br>
    menor: ${menorValor}, <br>
    maior: ${maiorValor}
  `;
};
