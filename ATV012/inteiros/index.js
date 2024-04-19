const number = document.getElementById("number");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  for(let i = 1; i <= number.value; i++) {
    console.log(i)
  }
})