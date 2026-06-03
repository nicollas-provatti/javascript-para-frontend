// Métodos para adicionar e remover elementos
const numeros = [1, 2, 3, 4, 5];

// O método push() adiciona o elemento no final do array. Ele pode receber uma lista de valores (6, 7, 8) e retorna o novo tamanho do array.
numeros.push(6); 
console.log(numeros);

// O método pop() remove o último elemento do array. Ele não recebe parâmetros e retorna o elemento que foi removido.
let ultimo = numeros.pop()

console.log(ultimo);
console.log(numeros);

// O método unshift() adiciona o elemento o início do array. Ele pode receber uma lsita de valores (6, 7, 8) e retorna o novo tamanho do array.
numeros.unshift(6);
console.log(numeros);

// O método shift() remove o primeiro elemento do array. Ele não recebe parâmetros e retorna o elemento que foi removido.
let primeiro = numeros.shift();

console.log(primeiro);
console.logg(numeros);