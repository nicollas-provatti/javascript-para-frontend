// O método sort() não faz ordenação numérica por padrão.

// O JavaScript converte os elementos para strings e faz uma comparação lexicográfica (ordem alfabética), como se estivesse comparando:

// ["4", "7", "6", "9", "12", "1", "0"]

// Por isso o resultado é: [0, 1, 12, 4, 6, 7, 9]

// Para ordenar números corretamente, você deve fornecer uma função de comparação: (a, b) => a - b

const numeros = [4, 7, 6, 9, 12, 1, 0];

numeros.sort((a, b) => a - b);
console.log(`Ordem crescente: [${numeros}]`);

// A função de comaração funciona da seguinte forma:

// - Retorna um valor negativo → a vem antes de b.
// - Retorna zero → mantém a ordem.
// - Retorna um valor positivo → a vai depois de b.

numeros.sort((a, b) => b - a);
console.log(`Ordem decrescente: [${numeros}]`);
