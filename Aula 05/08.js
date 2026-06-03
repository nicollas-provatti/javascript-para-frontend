// O método filter() chama uma função de callback para cada elemento e retorna um novo array com os elementos que passaram no teste.

const numeros = [10, 15, 20, 25, 30];

function isPar(numero) {
  return numero % 2 === 0;
}

const numerosPares = numeros.filter(isPar);
console.log(`Original: [${numeros}]`);
console.log(`Pares: [${numerosPares}]\n`);

const numerosImpares = numeros.filter((numero) => numero % 2 === 1);
console.log(`Original: [${numeros}]`);
console.log(`Impares: [${numerosImpares}]\n`);
