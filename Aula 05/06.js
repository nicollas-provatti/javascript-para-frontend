// O forEach() é uma função que recebe uma callback como parâmetro e aplica essa callback a cada elemento do array.

const numeros = [10, 20, 30, 40, 50];

// Exemplo: Dado um array com N números imprima os números com o valor dobrado.

// Sem forEach()
for (let indice = 0; indice < numeros.length; indice++) {
  //dobrar(numeros[indice], indice, numeros);
}

function dobrar(numero, indice, array) {
  console.log(`Forma 1: ${numero * 2}`);
  console.log(`Forma 2: ${array[indice] * 2}`);
}

// Com forEach()
numeros.forEach((numero, indice) => {
  console.log(`${indice}: ${numero * 2}`);
});