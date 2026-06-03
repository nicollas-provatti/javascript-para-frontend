// É possível encadear múltiplos métodos em JavaScript, desde que cada método retorne um objeto que possua os métodos subsequentes.

// Isso é especialmente comum com métodos de array, como map(), filter() e reduce().

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exemplo: Filtrar números pares, dobrá-los e somar o resultado

const pares = numeros.filter((numero) => numero % 2 === 0);
const dobrados = pares.map((numero) => numero * 2);
const soma = dobrados.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(`O resultado é ${soma}`);

let resultado = numeros
  .filter((numero) => numero % 2 === 0)
  .map((numero) => numero * 2)
  .reduce((acumulador, atual) => acumulador + atual, 0);

console.log(`O resultado das operações encadeadas é: ${resultado}`);

// Neste exemplo:
// 1. filter() retorna um novo array contendo apenas os números pares.
// 2. map() é chamado no array resultante para dobrar cada número.
// 3. reduce() é então chamado para somar todos os números do array final.
// O resultado final é a soma dos números pares dobrados.

// Esse tipo de encadeamento é poderoso e permite realizar operações complexas de forma concisa e legível.
