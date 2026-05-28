// Exemplo: Leia N número inteiros e retorna a soma deles.

let n = Number(prompt("Quantos números você vai digitar ?"));

let soma = 0;

for (let contador = 1; contador <= n; contador++) {
  let numero = Number(prompt(`Digite o ${contador}° número:`));

  soma = soma + numero;
}

console.log("A soma dos número digitados é ", soma);