const idade = document.getElementById("idade");
const submit = document.getElementById("submit");
const habilitado = document.getElementById("habilitado");

submit.addEventListener("click", () => {
  if (habilitado.checked && idade.value >= 18) {
    alert("pode dirigir");
  } else {
    alert("nao pode dirigir");
  }
});

