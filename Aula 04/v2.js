// Jogo da Adivinhação

// Mensagem Personalizada baseada no número de tentativas

// 3 tentativas ou menos: “Uau! Você é um gênio da adivinhação! 🧠”
// Entre 4 e 6: “Muito bem! Você foi rápido! 🚀”
// Mais de 6: “Conseguiu! Persistência é tudo! 💪”

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
    if (numeroTentativas <= 3) {
      alert(`Uau! Você é um gênio da adivinhação!\nNúmero de Tentativas: ${numeroTentativas}`);
    } else if (numeroTentativas <= 6) {
      alert(`Muito bem! Você foi rápido!\nNúmero de Tentativas: ${numeroTentativas}`);
    } else {
      alert(`Conseguiu! Persistência é tudo!\nNúmero de Tentativas: ${numeroTentativas}`);
    }
    break;
  }

  if (numeroSorteado > numero) {
    alert(`O número sorteado é MAIOR que ${numero}`);
  } else {
    alert(`O número sorteado é MENOR que ${numero}`);
  }
}