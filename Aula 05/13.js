// O operador rest permite agrupa valores restantes em um array.

function somar(...numeros) {
  console.log(numeros);

  let soma = 0;
  for (numero of numeros) {
    soma = soma + numero;
  }

  return soma;
}

let soma = somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`A soma dos parâmetros é ${soma}`);