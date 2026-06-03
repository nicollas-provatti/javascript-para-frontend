// O método map() chama uma função de callback para cada elemento e retorna um novo array.

const numeros = [10, 15, 20, 25, 30];

function dobrar(numero) {
  return numero * 2;
}

const numerosDobrados = numeros.map(dobrar);
console.log(`Original: [${numeros}]`);
console.log(`Dobrados: [${numerosDobrados}]\n`);

const numerosMetade = numeros.map((numero) => numero / 2);
console.log(`Original: [${numeros}]`);
console.log(`Metade: [${numerosMetade}]\n`);

// Importante: o método map() é usado para transformar os elementos de um array em um novo array com o mesmo número de elementos.
const numerosPares = numeros.map((numero) => {
  if (numero % 2 === 0) {
    return numero;
  }
});

console.log(`Original: [${numeros}]`);
console.log(`Pares: [${numerosPares}]\n`);
