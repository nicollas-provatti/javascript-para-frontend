// Exemplo: Criar uma função que simule uma calculadora simples (sem função de alta ordem)

function calcular(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? "Não é possível dividir por zero" : num1 /  num2;
  }
}

console.log(calcular(2, 3, "+"));
console.log(calcular(2, 3, "-"));
console.log(calcular(2, 3, "*"));
console.log(calcular(2, 3, "/"));