// Jogo da Adivinhação

// Refatoração

function escolherDificuldade() {
  let nivel = Number(
    prompt(`**************************************
  Bem-vindo ao Jogo da Adivinhação!
  **************************************
  Escolha uma dificuldade:
  1 - Fácil (1 a 10)
  2 - Médio (1 a 50)
  3 - Difícil (1 a 100)
  **************************************`),
  );

  return nivel;
}

function definirIntervaloDaDificuldade(nivel) {
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

  return intervalo;
}

function sortearNumero(intervalo) {
  return Math.ceil(Math.random() * intervalo);
}

function exibirDica(numeroDigitado, numeroSorteado) {
  if (numeroSorteado > numeroDigitado) {
    alert(`O número sorteado é MAIOR que ${numeroDigitado}`);
  } else {
    alert(`O número sorteado é MENOR que ${numeroDigitado}`);
  }
}

function exibirMensagemDeResultado(tentativas) {
  if (tentativas <= 3) {
    alert(
      `Uau! Você é um gênio da adivinhação!\nNúmero de Tentativas: ${tentativas}`,
    );
  } else if (tentativas <= 6) {
    alert(`Muito bem! Você foi rápido!\nNúmero de Tentativas: ${tentativas}`);
  } else {
    alert(
      `Conseguiu! Persistência é tudo!\nNúmero de Tentativas: ${tentativas}`,
    );
  }
}

function verificarNovoRecorde(tentativas, nivel, nomeJogador) {
  if (nivel === 1) {
    if (tentativas < melhorPontuacaoFacil) {
      melhorPontuacaoFacil = tentativas;
      melhorJogadorFacil = nomeJogador;
      alert(
        `Novo recorde no modo Fácil! O jogador ${nomeJogador} obteve a melhor pontuação até agora.`,
      );
    }
  } else if (nivel === 2) {
    if (tentativas < melhorPontuacaoMedio) {
      melhorPontuacaoMedio = tentativas;
      melhorJogadorMedio = nomeJogador;
      alert(
        `Novo recorde no modo Médio! O jogador ${nomeJogador} obteve a melhor pontuação até agora.`,
      );
    }
  } else if (nivel === 3) {
    if (tentativas < melhorPontuacaoDificil) {
      melhorPontuacaoDificil = tentativas;
      melhorJogadorDificil = nomeJogador;
      alert(
        `Novo recorde no modo Difícil! O jogador ${nomeJogador} obteve a melhor pontuação até agora.`,
      );
    }
  }
}

function mostrarPlacarFinal() {
  alert(`
    ===== PLACAR FINAL =====
    FÁCIL: ${melhorJogadorFacil} - ${melhorPontuacaoFacil} tentativas
    MÉDIO: ${melhorJogadorMedio} - ${melhorPontuacaoMedio} tentativas
    DIFÍCIL: ${melhorJogadorDificil} - ${melhorPontuacaoDificil} tentativas
    ========================`);
}

let melhorJogadorFacil = "";
let melhorPontuacaoFacil = Infinity;

let melhorJogadorMedio = "";
let melhorPontuacaoMedio = Infinity;

let melhorJogadorDificil = "";
let melhorPontuacaoDificil = Infinity;

while (true) {
  let nivel = escolherDificuldade();

  let intervalo = definirIntervaloDaDificuldade(nivel);

  let numeroSorteado = sortearNumero(intervalo);

  let numeroTentativas = 0;

  let nomeJogador = prompt("Qual o seu nome ?");

  while (true) {
    let numero = Number(prompt("Qual o seu palpite ? "));

    if (isNaN(numero) || numero < 1 || numero > intervalo) {
      alert("Informe um número entre 1 e 100. Esse palpite não contou");
      continue;
    }

    numeroTentativas++;

    if (numero === numeroSorteado) {
      exibirMensagemDeResultado(numeroTentativas);
      verificarNovoRecorde(numeroTentativas, nivel, nomeJogador);
      break;
    }

    exibirDica(numero, numeroSorteado);
  }

  let novoJogo = confirm("Deseja jogar novamente ?");

  if (!novoJogo) {
    mostrarPlacarFinal();
    break;
  }
}
