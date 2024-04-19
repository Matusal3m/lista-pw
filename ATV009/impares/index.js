let contador = 0;

for (let i = 0; i <= 60; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    contador = contador + 1;
  }
}
console.log("contador: " + contador);
