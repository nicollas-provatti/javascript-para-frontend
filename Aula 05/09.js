// O método reduce() reduz um array a um único valor, aplicando uma função acumuladora a cada elemento do array.

const numeros = [10, 15, 20, 25, 30];

function somar(acumulador, atual, indice) {
  console.log(`Índice: ${indice} | Acumulador: ${acumulador} | Atual: ${atual}`);
  return acumulador + atual;
}

const soma = numeros.reduce(somar, 0);
console.log(`Soma: [${soma}]`);