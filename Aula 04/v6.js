// Jogo da Adivinhação

// Placar dividido por níveis

let melhorJogadorFacil = "";
let melhorPontuacaoFacil = 11;

let melhorJogadorMedio = "";
let melhorPontuacaoMedio = 51;

let melhorJogadorDificil = "";
let melhorPontuacaoDificil = 101;

while (true) {
  let nivel = Number(
    prompt(`**************************************
  Bem-vindo ao Jogo da Adivinhação!
  **************************************
  Escolha uma dificuldade:
  1 - Fácil (1 a 10)
  2 - Médio (1 a 50)
  3 - Difícil (1 a 100
  **************************************`),
  );

  let intervalo;

  switch (nivel) {
    case 1:
      intervalo = 10;
      alert(
        `Um número entre 1 a 10 foi sorteado.\nTente adivinhar qual é. Boa sorte!`,
      );
      break;
    case 2:
      intervalo = 50;
      alert(
        `Um número entre 1 a 50 foi sorteado.\nTente adivinhar qual é. Boa sorte!`,
      );
      break;
    case 3:
      intervalo = 100;
      alert(
        `Um número entre 1 a 100 foi sorteado.\nTente adivinhar qual é. Boa sorte!`,
      );
      break;
    default:
      intervalo = 10;
      alert(
        `Um número entre 1 a 10 foi sorteado.\nTente adivinhar qual é. Boa sorte!`,
      );
  }

  let numeroSorteado = Math.ceil(Math.random() * intervalo);

  let numeroTentativas = 0;

  let nomeJogador = prompt("Qual o seu nome ?");

  while (true) {
    let numero = Number(prompt("Qual o seu palpite ? "));

    if (numero > intervalo) {
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

      if (nivel === 1) {
        if (numeroTentativas < melhorPontuacaoFacil) {
          melhorPontuacaoFacil = numeroTentativas;
          melhorJogadorFacil = nomeJogador;
          alert(
            `Novo recorde no modo Fácil! O jogador ${nomeJogador} obteve a melhor pontuação até agora.`,
          );
        }
      } else if (nivel === 2) {
        if (numeroTentativas < melhorPontuacaoMedio) {
          melhorPontuacaoMedio = numeroTentativas;
          melhorJogadorMedio = nomeJogador;
          alert(
            `Novo recorde no modo Médio! O jogador ${nomeJogador} obteve a melhor pontuação até agora.`,
          );
        }
      } else if (nivel === 3) {
        if (numeroTentativas < melhorPontuacaoDificil) {
          melhorPontuacaoDificil = numeroTentativas;
          melhorJogadorDificil = nomeJogador;
          alert(
            `Novo recorde no modo Difícil! O jogador ${nomeJogador} obteve a melhor pontuação até agora.`,
          );
        }
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
    alert(`
    ===== PLACAR FINAL =====
    FÁCIL: ${melhorJogadorFacil} - ${melhorPontuacaoFacil} tentativas
    MÉDIO: ${melhorJogadorMedio} - ${melhorPontuacaoMedio} tentativas
    DIFÍCIL: ${melhorJogadorDificil} - ${melhorPontuacaoDificil} tentativas
    ========================`);
    break;
  }
}
