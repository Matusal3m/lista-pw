const valorDeTabela = document.getElementById("valor").value;
const parcelas = document.getElementById("parcelas").value;
let valorTotal;

const descontoAVista = 0.025;
const jurosPorParcelas = {
  duasACinco: 0,
  seisADez: 0.06,
  onzeAQuinze: 0.13,
};

if (parcelas >= 2 && parcelas <= 5) {
  valorTotal = valorDeTabela - valorDeTabela * jurosPorParcelas.duasACinco;
} else if (parcelas >= 6 && parcelas <= 10) {
  valorTotal = valorDeTabela + valorDeTabela * jurosPorParcelas.seisADez;
} else if (parcelas >= 11 && parcelas <= 15) {
  valorTotal = valorDeTabela + valorDeTabela * jurosPorParcelas.onzeAQuinze;
}

console.log(`
  valor total: ${valorTotal}
  valor por parcela: ${(valorTotal / parcelas).toFixed(2)}
`);
