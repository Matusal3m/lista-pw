const number = document.getElementById("number");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const value = number.value;
  const isValidNumber = value <= 10 && value >= 0 && value !== "";

  result.innerHTML = "";

  if (!isValidNumber) {
    value = "";
    alert("digite um número entre 0 e 10");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(value + " x " + i + " = " + value * i);
    result.innerHTML += value + " x " + i + " = " + value * i + "<br>";
  }
});
