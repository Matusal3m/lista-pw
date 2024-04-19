const idade = document.getElementById("idade");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  if (idade.value < 18) {
    alert("Menor de idade, não pode dirigir");
  } else {
    alert("Pode dirigir");
  }
});
