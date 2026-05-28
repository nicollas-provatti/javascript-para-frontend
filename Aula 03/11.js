// Função Anônima

const somar = function (num1, num2) {
  return num1 + num2;
}

let soma = somar(2, 3);

console.log("A soma é " + soma);

// Função de Seta (Arrow Functions)

const multiplicar = (num1, num2) => {
  return num1 * num2;
}

const multiplicao = multiplicar(2, 3);

console.log("A multiplicação é " + multiplicao);

const dobrar = (num) => num * 2;

let dobro = dobrar(4);

console.log("O dobro é " + dobro);