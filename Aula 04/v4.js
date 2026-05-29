// Jogo da Adivinhação

// Verificar se o palpite é válido

let melhorJogador = "";
let melhorPontuacao = 101;

while (true) {
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

  let nomeJogador = prompt("Qual o seu nome ?");

  while (true) {
    let numero = Number(prompt("Qual o seu palpite ? "));

    if (numero < 1 || numero > 100) {
      alert("Informe um número entre 1 e 100. Esse palpite não contou");
      continue;
    }

    numeroTentativas++;

    if (numero === numeroSorteado) {
      if (numeroTentativas <= 3) {
        alert(
          `Uau! Você é um gênio da adivinhação!\nNúmero de Tentativas: ${numeroTentativas}`,
        );
      } else if (numeroTentativas <= 6) {
        alert(
          `Muito bem! Você foi rápido!\nNúmero de Tentativas: ${numeroTentativas}`,
        );
      } else {
        alert(
          `Conseguiu! Persistência é tudo!\nNúmero de Tentativas: ${numeroTentativas}`,
        );
      }

      if (numeroTentativas < melhorPontuacao) {
        melhorPontuacao = numeroTentativas;
        melhorJogador = nomeJogador;
        alert(`Novo recorde! O jogador ${nomeJogador} obteve a melhor pontuação até agora.`)
      }

      break;
    }

    if (numeroSorteado > numero) {
      alert(`O número sorteado é MAIOR que ${numero}`);
    } else {
      alert(`O número sorteado é MENOR que ${numero}`);
    }
  }

  let novoJogo = confirm("Deseja jogar novamente ?");

  if (!novoJogo) {
    alert(`O melhor jogador foi ${melhorJogador} com ${melhorPontuacao} tentativas.`);
    break;
  };
}
