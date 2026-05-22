## 📝 Exercícios - Estrutura de Controle

---

### 🔹 Exercício 1 - Habilitação
**Descrição:** Crie um programa que leia o **ano de nascimento** do usuário e o **ano atual**. Com base nesses dados, calcule a **idade** e exiba uma mensagem informando:

- Quantos anos o usuário completa no ano atual
- E se ele **pode ou não tirar a habilitação**, considerando que a idade mínima é 18 anos.

**Exemplo de:**
- Entrada:
    ```css
    Digite o ano de nascimento: 2006
    Digite o ano atual: 2025
    ```

- Saída:
    ```css
    Você completa 19 anos em 2025 e poderá tirar a habilitação.
    ```

**Outro exemplo:**
- Entrada:
    ```css
    Digite o ano de nascimento: 2010
    Digite o ano atual: 2025
    ```
 
- Saída:
    ```css
    Você completa 15 anos em 2025 e ainda não poderá tirar a habilitação.
    ```

---

### 🔹 Exercício 2 - Faixa Etária
**Descrição:** Crie um programa que solicite ao usuário sua **idade** e, com base na idade fornecida, imprima uma mensagem indicando a faixa etária correspondente:

- Idade **maior ou igual** a 65: `Você é um idoso.`
- Idade **maior ou igual** a 18: `Você é um adulto.`
- Idade **maior ou igual** a 13: `Você é um adolescente.`
- **Senão** a saída deve ser: `Você é uma criança.`

**Exemplo de:**
- Entrada:
    ```yaml
    Qual a sua idade ? 30
    ```

- Saída:
    ```css
    Você é um adulto. 
    ```

---

### 🔹 Exercício 3 - Classificação de IMC
**Descrição:** Crie um programa que solicite ao usuário o seu **peso** (em kg) e sua **altura** (em metros). Em seguida, o programa deve calcular o IMC do usuário utilizando a fórmula:

```ini
IMC = peso / (altura * altura)
```

Após o cálculo, exiba o **valor do IMC** e, de acordo com o valor obtido, informe a **classificação** do IMC:

- **Abaixo de 18.5**: `Abaixo do peso`
- **Entre 18.5 e 24.9**: `Peso normal`
- **Entre 25 e 29.9**: `Sobrepeso`
- **Entre 30 e 34.9**: `Obesidade grau 1`
- **Entre 35 e 39.9**: `Obesidade grau 2`
- **Acima de 40**: `Obesidade grau 3`

**Exemplo de:**
- Entrada:
    ```css
    Peso (kg): 70
    Altura (m): 1.75
    ```

- Saída:
    ```yaml
    Seu IMC é: 22.86
    Você tem peso normal.
    ```

---

### 🔹 Exercício 4 - Calculadora Simples 1
**Descrição:** Escreva um programa que simule uma calculadora simples. O programa deve ler dois números inteiros e o tipo de operação a ser realizada (soma, subtração, multiplicação ou divisão). A operação será escolhida pelo usuário, utilizando um número que representará cada operação:

- **1** para soma
- **2** para subtração
- **3** para multiplicação
- **4** para divisão

Use o comando `switch` para escolher a operação e, ao final, exiba o resultado da operação escolhida.

**Exemplo de:**
- Entrada:
    ```css
    Digite o primeiro número: 10
    Digite o segundo número: 5

    --- Operações ---
    1 - soma 
    2 - subtração 
    3 - multiplicação
    4 - divisão
    -----------------

    Escolha uma operação: 1
    ```

- Saída:
    ```yaml
    Resultado da soma: 15
    ```

---

### 🔹 Exercício 5 - Imprimindo Intervalo
**Descrição:** Crie um programa  que leia dois números inteiros: **um valor inicial** e **um valor final**. O programa deve então imprimir todos os números do valor inicial até o valor final, **inclusive**.

**Exemplo de:**
- Entrada:
    ```css
    Valor inicial: 5
    Valor final: 10
    ```

- Saída:
    ```yaml
    5 6 7 8 9 10
    ```

---

### 🔹 Exercício 6 - Soma dos Pares
**Descrição:** Crie um programa que leia um número inteiro N e calcule a **soma de todos os números pares de 1 até N**. O programa deve utilizar um laço de repetição para percorrer os números de 1 até N, somando apenas os números pares.

**Exemplo de:** 
- Entrada:
    ```css
    N: 10
    ```

- Saída:
    ```css
    A soma dos números pares de 1 até 10 é: 30
    ```

---

### 🔹 Exercício 7 - Positivos e Negativos
**Descrição:** Crie um programa que leia números inteiros da entrada até que o número digitado seja **0**. Para cada número, o programa deve verificar se ele é **positivo** ou **negativo**. Ao final, o programa deve informar a quantidade de números positivos e a quantidade de números negativos digitados.

**Exemplo de:** 
- Entrada:
    ```css
    3
    -2
    5
    -1
    0
    ```

- Saída:
    ```yaml
    Quantidade de números positivos: 3
    Quantidade de números negativos: 2
    ```

---

### 🔹 Exercício 8 - Digite a Senha
**Descrição:** Crie um programa que solicite **uma senha ao usuário** e continue pedindo até que ele digite a senha correta. A senha correta deve estar definida no próprio programa. Ao acertar, exiba uma mensagem de acesso liberado.
Use o laço `do-while` para garantir que o programa solicite a senha pelo menos uma vez.

**Exemplo de:**
- Entrada:
    ```css
    Digite a senha: 0000
    Digite a senha: 4321
    Digite a senha: 1234
    ```
 
* Saída:
    ```css
    Senha incorreta. Tente novamente.
    Senha incorreta. Tente novamente.
    Acesso liberado.
    ```
    
---

## 📝 Exercícios - Função

### 🔹 Exercício 1 - Verificador de Idade
**Descrição:** Crie uma função chamada `verificarIdade` que receba dois parâmetros: **nome** (com valor padrão "visitante") e **idade**. A função não deve retornar **nenhum valor**, apenas exibir uma mensagem com `alert` informando:

- "Olá, [nome]! Você é menor de idade." se a idade for menor que 18.
- "Olá, [nome]! Você é maior de idade." se a idade for 18 ou mais.

Antes de exibir a mensagem, verifique se a idade informada é válida: ela não pode ser negativa nem ultrapassar um valor máximo definido (por exemplo, 120). O programa deve começar perguntando ao usuário, por meio de `confirm`, se ele deseja verificar uma idade. Enquanto a resposta for positiva, utilize `prompt` para solicitar o **nome** e a **idade** da pessoa, e chame a função `verificarIdade`. O processo deve se repetir até que o usuário decida encerrar.

---

### 🔹 Exercício 2 - Calculadora Simples 2
**Descrição:**  Descrição: Crie um programa que solicite ao usuário dois **números** e um **operador matemático** (`+`, `-`, `*`, `/`, `%`), e passe esses valores para uma função chamada calcular, responsável por executar a operação correspondente e retornar o resultado. Caso algum parâmetro não seja informado, utilize valores padrão. O programa deve verificar se é possível realizar as operações de divisão e módulo, garantindo que o segundo número não seja zero. Após exibir o resultado, pergunte ao usuário se deseja fazer outro cálculo (**sim** ou **não**). Se a resposta for sim, repita o processo; caso contrário, finalize o programa com uma mensagem de encerramento. Certifique-se de validar as entradas e tratar erros para garantir o bom funcionamento do programa.

---

### 🔹 Exercício 3 - Saudação com Horário
**Descrição:** Crie uma função anônima atribuída à variável `mensagemDeBoasVindas` que receba o nome de uma pessoa como parâmetro e exiba uma saudação personalizada com base no horário atual do sistema. Utilize o objeto `Date` junto com o método `getHours()` para determinar a hora do dia. Antes de chamar a função, solicite ao usuário que informe seu nome. A mensagem final deve combinar a saudação apropriada com o nome informado.

A função deve retornar:
- "Bom dia, [nome]!" se a hora estiver entre 6 e 11.
- "Boa tarde, [nome]!" se a hora estiver entre 12 e 17.
- "Boa noite, [nome]!" se a hora estiver entre 18 e 23.
- "Olá, [nome]!" nos demais casos.

---

### 🔹 Exercício 4 - Cálculo de Desconto
**Descrição:** Você está desenvolvendo um sistema de compras online e precisa criar uma arrow function chamada `calcularDesconto`, que receba dois parâmetros: **preco** e **porcentagemDesconto**. A função deve retornar o valor final do produto após a aplicação do desconto. Em seguida, permita que o usuário informe os dados de vários produtos e visualize o valor com desconto, repetindo o processo até que ele decida encerrar, por meio de uma pergunta como "Deseja calcular o desconto de outro produto? (sim/não)". Certifique-se de validar as entradas e exibir o resultado formatado de forma clara para o usuário.

---

### 🔹 Exercício 5 - Mensagem com Atraso
**Descrição:** Você está desenvolvendo um sistema que exibe mensagens em etapas, com um pequeno atraso entre elas, simulando carregamento ou notificação gradual.
Crie uma função chamada `executarComAtraso` que receba dois parâmetros: uma **mensagem** e uma **função callback**. A função deve exibir a mensagem após 2 segundos usando `setTimeout`, e depois que a mensagem for exibida, deve chamar a função de callback passada. A função callback pode exibir uma saudação final ao usuário.

---
