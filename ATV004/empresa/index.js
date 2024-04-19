const score = document.getElementById("score");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  if (score.value > 1000) {
    alert("Usuário VIP")
  } else {
    alert("Usário normal")
  }
})