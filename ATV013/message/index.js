const aplicationName = document.querySelector("title").innerHTML;

window.onload = () => showMessage();

const showMessage = () => {
  console.log(`Acesso à aplicação ${aplicationName}`);
  alert(`Bem vindo à ${aplicationName}`);
};
