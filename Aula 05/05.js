// Iteráveis
const numeros = [10, 20, 30, 40, 50];

// for
for (let indice = 0; indice < numeros.length; indice++) {
  console.log(numeros[indice]);
}

// for..of -> iterando sobre os valores
for (let numero of numeros) {
  console.log(numero);
}

// for..in -> iterando sobre os índices
for (let indice in numeros) {
  console.log(`[${indice}] = ${numeros[indice]}`);
}