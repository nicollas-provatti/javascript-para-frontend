// Exemplo: Criar uma função que simule uma calculadora simples (sem função de alta ordem)

function somar(num1, num2) {
  let resultado = num1 + num2;
  return `${num1} + ${num2} = ${resultado}`;
}

function subtrair(num1, num2) {
  let resultado = num1 - num2;
  return `${num1} - ${num2} = ${resultado}`;
}

function multiplicar(num1, num2) {
  let resultado = num1 * num2;
  return `${num1} * ${num2} = ${resultado}`;
}

function dividir(num1, num2) {
  if (num2 === 0) return "Não é possível dividir por zero";
  
  let resultado = num1 + num2;
  return `${num1} + ${num2} = ${resultado}`;
}

function calcular(num1, num2, operacao) {
  return operacao(num1, num2);
}


console.log(calcular(2, 3, somar));
console.log(calcular(2, 3, subtrair));
console.log(calcular(2, 3, multiplicar));
console.log(calcular(2, 3, dividir));