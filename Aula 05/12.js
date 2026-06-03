// O operador spread é usado para espalhar/expandir os elemento de um array

const array1 = [10, 15, 20];
const array2 = [25, 30, 35];

// Exemplo: juntar os dois arrays

// sem spread
const arrayConcat = array1.concat(array2);

console.log(arrayConcat);

// com spread
const arraySpread = [...array1, ...array2];

console.log(arraySpread);

// Aplicação: podemos usar o spread para criar uma cópia independente
const numeros = [1, 2, 3, 4];

// cópia sem spread
const copiaSemSpread = numeros;
copiaSemSpread[0] = 0;

console.log(numeros);

// cópia com spread
const copiaComSpread = [...numeros];
copiaComSpread[0] = 0;

console.log(numeros);