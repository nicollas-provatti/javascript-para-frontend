// Jogo da Adivinhação

// - Lista de número de 1 a 100
// - Sortear um número entre 1 e 100
// - Permiti que o usuário de palpites até acertar
// - Contador o número de tentativas

alert(`
  **************************************
  Bem-vindo ao Jogo da Adivinhação!
  **************************************
  
  Um número de 1 a 100 foi sorteado!
  Tente adivinhar qual é. Boa sorte!
  **************************************
`);

let numeroSorteado = Math.ceil(Math.random() * 100);

let numeroTentativas = 0;

while (true) {
  let numero = Number(prompt("Qual o seu palpite ? "));

  numeroTentativas++;

  if (numero === numeroSorteado) {
    alert(`Você acertou. Parabéns!!!\nNúmero de tentativas: ${numeroTentativas}`);
    break;
  }

  if (numeroSorteado > numero) {
    alert(`O número sorteado é MAIOR que ${numero}`);
  } else {
    alert(`O número sorteado é MENOR que ${numero}`);
  }
}