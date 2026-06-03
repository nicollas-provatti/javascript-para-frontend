// Características do array em JS:

// É dinâmico
const numeros = [7, 6, 5, 2];

console.log(numeros); // Tamanho 4

numeros[4] = 9;
console.log(numeros); // Tamanho 5

// Pode conter "buracos"
numeros[6] = 1;
console.log(numeros);

// Pode conter valores de tipos variados
const valores = [1, 1.76, "Lucas", true, undefined, null, [], {}, () => {}];

console.log(valores);
