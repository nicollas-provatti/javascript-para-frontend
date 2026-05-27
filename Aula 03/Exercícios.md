## 📝 Exercícios - Estrutura de Repetição

---

### 🔹 Exercício 1 - Classificação para CNH
**Descrição:** Crie um programa que permita verificar se várias pessoas podem tirar a Carteira Nacional de Habilitação (CNH).

Inicialmente, o programa deve perguntar quantas pessoas serão analisadas. Em seguida, para cada pessoa, solicite:

- Nome
- Idade

Considere que uma pessoa pode tirar CNH apenas se tiver **18 anos ou mais**.

Ao final de cada análise, exiba uma mensagem informando se a pessoa pode ou não tirar a CNH.

**Exemplo de:**
- Entrada:
    ```yaml
    Quantas pessoas deseja analisar? 3

    Digite o nome da 1ª pessoa: Lucas
    Digite a idade de Lucas: 17

    Digite o nome da 2ª pessoa: Maria
    Digite a idade de Maria: 22

    Digite o nome da 3ª pessoa: João
    Digite a idade de João: 18
    ```
 
* Saída:
    ```css
    Lucas nao pode tirar CNH.

    Maria pode tirar CNH.

    Joao pode tirar CNH.
    ```

<br>

**Lógica de decisão**
```portugol
se (idade >= 18) {
    escreva(nome, " pode tirar CNH.\n\n")
} 
senao {
    escreva(nome, " nao pode tirar CNH.\n\n")
}
```
---

### 🔹 Exercício 2 - Total de Vendas da Loja
**Descrição:** Uma loja deseja calcular o valor total arrecadado com as compras realizadas durante o dia.

Faça um programa que pergunte **quantos clientes foram atendidos**. Em seguida, para cada cliente, solicite **o valor da sua compra** e **acumule esses valores**.

Ao final, exiba o valor total arrecadado pela loja.

**Exemplo de:**
- Entrada:
    ```yaml
    Quantos clientes foram atendidos? 3

    Digite o valor da compra do 1° cliente: 150.50
    Digite o valor da compra do 2° cliente: 89.90
    Digite o valor da compra do 3° cliente: 210.00
    ```
 
* Saída:
    ```css
    O total arrecadado pela loja foi: R$ 450.40
    ```

**Dica:** Utilize uma variável acumuladora iniciada com zero para armazenar a soma dos valores das compras conforme elas forem sendo informadas.

---

### 🔹 Exercício 3 - Maior e Menor Número da Lista

**Descrição:** Faça um programa que pergunte quantos números serão digitados. Em seguida, leia todos os números informados pelo usuário e determine:

- O maior número digitado.
- O menor número digitado.

**⚠️ Atenção:** a sua solução deve funcionar corretamente para números positivos, negativos e zero.

Ao final, exiba o maior e o menor valor encontrados.

**Exemplo de:**
- Entrada:
    ```yaml
    Quantos numeros voce vai digitar? 5

    Digite o 1° numero: 10
    Digite o 2° numero: -5
    Digite o 3° numero: 8
    Digite o 4° numero: 20
    Digite o 5° numero: 3
    ```
 
* Saída:
    ```css
    O maior numero digitado foi 20
    O menor numero digitado foi -5
    ```
<br>

No exemplo apresentado em aula, a variável `maiorNumero` foi inicializada com **0**, o que não funciona corretamente quando todos os números digitados são negativos. Pense em uma estratégia que permita encontrar corretamente o maior e o menor valor independentemente dos números informados pelo usuário.

---

### 🔹 Exercício 4 - Positivos e Negativos
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
 
* Saída:
    ```yaml
    Quantidade de números positivos: 2
    Quantidade de números negativos: 2
    ```

---


### 🔹 Exercício 5 - pH de Substâncias
**Descrição:** Crie um programa em Portugol que leia os valores de pH de **N substâncias**. A entrada termina quando o usuário digitar **-1**. Para cada valor informado, o programa deve classificar a substância como ácida, básica ou neutra, de acordo com seu pH:

- Se o pH for **menor que 7**: `Substância Ácida`
- Se o pH for **maior que 7**: `Substância Básica`
- Se o pH for **igual a 7**: `Substância Neutra`

**Exemplo de:**
- Entrada:
    ```css
    6.5
    7
    9.2
    4.3
    -1
    ```
 
* Saída:
    ```yaml
    Substância Ácida
    Substância Neutra
    Substância Básica
    Substância Ácida
    ```

---

### 🔹 Exercício 6 - Controle de Anúncios da Agência

**Descrição:** A agência de publicidade Criativa produz anúncios para diferentes tipos de mídia. O valor cobrado depende da mídia escolhida pelo cliente:

| Mídia   | Condição         | Valor       |
| ------- | ---------------- | ----------- |
| Rádio   | FM               | R$ 500,00   |
| Rádio   | AM               | R$ 300,00   |
| TV      | Horário até 20h  | R$ 1.200,00 |
| TV      | Horário após 20h | R$ 2.000,00 |
| Revista | -                | R$ 750,00   |
| Outdoor | -                | R$ 1.500,00 |

Crie um programa que permita cadastrar vários anúncios.

Para cada cliente, o programa deve solicitar o tipo de mídia desejado. Dependendo da mídia escolhida, informações adicionais poderão ser necessárias:

- Para **Rádio**, perguntar se o anúncio será em **AM** ou **FM**.
- Para **TV**, perguntar o horário de exibição.
- Para **Revista** e **Outdoor**, nenhuma informação adicional será necessária.

Ao final, o programa deve exibir:

- O valor total que a agência irá receber.
- A quantidade de anúncios para Rádio.
- A quantidade de anúncios para TV.
- A quantidade de anúncios para Revista.
- A quantidade de anúncios para Outdoor.

**Escolha uma das abordagens abaixo:**
- *Opção 1 - Quantidade de clientes:* Pergunte inicialmente quantos clientes serão atendidos e utilize um laço para realizar os cadastros.

* *Opção 2 - Condição de parada:* Permita que o usuário cadastre anúncios até decidir encerrar o programa. Após cada cadastro, pergunte se deseja registrar outro anúncio, por exemplo.

**Exemplo de:**
**Opção 1 - Quantidade de clientes**
- Entrada :
    ```css
    Quantos clientes deseja cadastrar? 3

    Cliente 1
    Tipo de midia (radio/tv/revista/outdoor): radio
    Faixa (AM/FM): FM

    Cliente 2
    Tipo de midia (radio/tv/revista/outdoor): tv
    Horario: 21

    Cliente 3
    Tipo de midia (radio/tv/revista/outdoor): revista
    ```
 
* Saída:
    ```yaml
    Valor total arrecadado: R$ 3250.00

    Anuncios de Radio: 1
    Anuncios de TV: 1
    Anuncios de Revista: 1
    Anuncios de Outdoor: 0
    ```

**Opção 2 - Condição de Parada**

- Entrada:
    ```css
   Tipo de midia (radio/tv/revista/outdoor): radio
    Faixa (AM/FM): AM

    Deseja cadastrar outro anuncio? (S/N): S

    Tipo de midia (radio/tv/revista/outdoor): tv
    Horario: 22

    Deseja cadastrar outro anuncio? (S/N): S

    Tipo de midia (radio/tv/revista/outdoor): outdoor

    Deseja cadastrar outro anuncio? (S/N): N
    ```
 
* Saída:
    ```yaml
    Valor total arrecadado: R$ 3800.00

    Anuncios de Radio: 1
    Anuncios de TV: 1
    Anuncios de Revista: 0
    Anuncios de Outdoor: 1
    ```

**Dicas:**
- Utilize um **acumulador** para armazenar o valor total arrecadado.
- Utilize **contadores** para registrar quantos anúncios de cada mídia foram cadastrados.
- Utilize estruturas de decisão para determinar o valor de cada anúncio.
- Tente organizar sua solução em etapas antes de começar a programar. - Isso ajudará bastante em um problema com várias condições.

---

## 📝 Exercícios - Função

### 🔹 Exercício 1 - Calculando Multas de Trânsito
**Descrição:** Devido ao grande número de acidentes ocorridos recentemente na avenida principal da cidade, foi instalado um sistema de radares para monitorar a velocidade dos veículos.

A velocidade máxima permitida é de **50 km/h**.

Crie uma função chamada `calculaMulta` que receba a velocidade de um motorista e retorne o valor da multa que ele deverá pagar, seguindo as regras abaixo:

- Até **50 km/h** → não recebe multa.
- Até **10% acima do limite** → multa de **R$ 230,00**.
- Até **20% acima do limite** → multa de **R$ 340,00**.
- Acima de **20% do limite** → multa de **R$ 19,28** por km excedido.

Depois, utilize o `prompt` para solicitar ao usuário a velocidade do motorista e exiba uma mensagem informando o valor da multa. 

**Informações importantes**
- 10% acima de 50 km/h = **55 km/h**
- 20% acima de 50 km/h = **60 km/h**


**Exemplo de:**
- Entrada:
    ```css
    Informe a velocidade do motorista (km/h): 54
    ```
 
* Saída:
    ```yaml
    O motorista deve pagar R$ 230,00 de multa, pois ultrapassou até 10% do limite permitido.
    ```

---

### 🔹 Exercício 2 - Calculando o Volume de Esferas
**Descrição:** Escreva um programa que receba o raio de três esferas e exiba o volume de cada uma delas.

Para resolver o problema, crie obrigatoriamente uma função chamada `volumeEsfera` que:

- receba o raio da esfera como parâmetro;
- calcule o volume;
- retorne o valor calculado.

A função **não deve imprimir** o resultado na tela. O programa principal será responsável por chamar a função e exibir os volumes retornados.

**Fórmula do Volume da Esfera**

O volume de uma esfera é calculado pela fórmula:

\[
V = \frac{4 \pi R^3}{3}
\]

Considere: π=3.1416

**Exemplo de:**
- Entrada:
    ```css
    Informe o raio da 1ª esfera: 2
    Informe o raio da 2ª esfera: 5
    Informe o raio da 3ª esfera: 7
    ```
 
* Saída:
    ```yaml
    Volume da 1ª esfera: 33.5104

    Volume da 2ª esfera: 523.6000

    Volume da 3ª esfera: 1436.6832
    ```

---

### 🔹 Exercício 3 - Verificador de Idade
**Descrição:** Crie uma função chamada `verificarIdade` que receba dois parâmetros: **nome** (com valor padrão "visitante") e **idade**. A função não deve retornar **nenhum valor**, apenas exibir uma mensagem com `alert` informando:

- `Olá, [nome]! Você é menor de idade.` se a idade for **menor que 18**.
- `Olá, [nome]! Você é maior de idade.` se a idade for **18 ou mais**.

Antes de exibir a mensagem, verifique se a idade é válida:

- A idade não pode ser negativa.
- A idade não pode ser maior que 120.

Caso a idade seja inválida, exiba: `Idade inválida!`.

**Funcionamento do programa**

O programa deve:

1. Solicitar o nome da pessoa utilizando `prompt`.
2. Solicitar a idade utilizando `prompt`.
3. Chamar a função `verificarIdade`.
4. Após a verificação, perguntar com `confirm` se o usuário deseja verificar outra idade.
5. Repetir o processo enquanto a resposta do `confirm` for positiva.

⚠️ O `confirm` deve aparecer apenas depois da primeira verificação.

**Exemplo de:**
- Entrada:
    ```css
    prompt("Informe o nome:")
    -> Lucas

    prompt("Informe a idade:")
    -> 17

    confirm("Deseja verificar outra idade?")
    -> Cancelar
    ```
 
* Saída:
    ```yaml
    Olá, Lucas! Você é menor de idade.
    ```

---

### 🔹 Exercício 4 - Sistema Inteligente de Descontos
**Descrição:** Uma loja deseja criar um sistema inteligente para aplicar descontos automaticamente de acordo com o valor da compra.

O programa deve:

1. Solicitar ao usuário, utilizando `prompt`, o valor original do produto.
2. Escolher automaticamente qual função de desconto será utilizada.
3. Exibir o valor final do produto utilizando `alert`.

**Regras de desconto**

- Compras até **R$ 100** → desconto de **10%**
- Compras acima de **R$ 100** e até **R$ 500** → desconto de **20%**
- Compras acima de **R$ 500** → desconto de **30%**

Crie funções separadas para cada desconto: `desconto10`, `desconto20`,  e `desconto30`. Cada função deve:

- receber o valor do produto;
- calcular o desconto;
- retornar uma mensagem formatada.

Depois, crie uma função chamada `aplicarDesconto` que receba:

- o valor do produto;
- uma função de desconto.

A função `aplicarDesconto` deverá executar a função recebida como parâmetro e retornar o resultado.

- Entrada:
    ```css
    Informe o valor do produto: 80
    ```
 
* Saída:
    ```yaml
    O produto recebeu 10% de desconto e agora custa R$ 72.
    ```
