// Exemplo: Leia N números inteiros e imprima o maior 

let n = Number(prompt("Quantos números você vai digitar ?"));

let maiorNumero = 0; // Não serve para números negativos

for (let contador = 1; contador <= n; contador++) {
  let numero = Number(prompt(`Digite o ${contador}° número:`));

  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}

console.log("O maior número digitado foi ", maiorNumero);