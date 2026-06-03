// O operador destructuring permite extrair 
// valores de arrays diretamente em variáveis.

const numeros = [10, 15, 20];

// sem destructuring
let num1 = numeros[0];
let num2 = numeros[1];
let num3 = numeros[2];

console.log(num1, num2, num3);

// com destructuring
let [n1, n2, n3] = numeros;

console.log(n1, n2, n3);