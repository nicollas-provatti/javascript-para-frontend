# 📘 Aula 1 - Introdução

---

## 🔍 O que o JavaScript é capaz de fazer ?
JavaScript é uma linguagem de programação extremamente poderosa e versátil. Originalmente criada para trazer interatividade às páginas web, ela evoluiu ao ponto de ser usada tanto no **frontend** (o que o usuário vê) quanto no **backend** (o que acontece por trás dos bastidores do site).

<div style="height: 1px"></div>

### 🔹 No Frontend (navegador), o JavaScript pode

- Criar interações dinâmicas, como abrir e fechar menus;
- Atualizar o conteúdo da página sem recarregar (usando AJAX ou Fetch API);
- Validar formulários antes de enviar;
- Criar animações e efeitos visuais;
- Controlar eventos do usuário (cliques, digitação, rolagem, etc.);
- Construir aplicações completas com frameworks como **React**, **Vue** ou **Angular**.

<div style="height: 1px"></div>

### 🔹 No Backend (servidor), o JavaScript pode

- Criar servidores web e APIs usando **Node.js**;
- Acessar bancos de dados (como MongoDB, MySQL, PostgreSQL);
- Processar requisições e respostas de usuários;
- Construir sistemas completos como e-commerces, redes sociais e muito mais.

<div style="height: 1px"></div>

### 🔹 Em outras áreas

- Aplicativos móveis com React Native;
- Aplicações desktop com Electron (como o Visual Studio Code);
- Automação de tarefas (scripts);
- Desenvolvimento de jogos;
- Internet das Coisas (IoT);
- Machine Learning com bibliotecas como TensorFlow.js.

---

## 🔵 Cliente e Servidor
Quando acessamos um site, como por exemplo `www.exemplo.com`, estamos na verdade interagindo com **dois lados diferentes de um sistema**: o **cliente** e o **servidor**. Entender essa relação é fundamental para compreender onde o JavaScript pode atuar.

<div style="height: 1px"></div>

### 🔹 Cliente (Client-side)
O cliente é o **navegador do usuário** (como Chrome, Firefox, Edge). Ele é responsável por:

- Exibir as páginas web;
- Executar códigos JavaScript no próprio navegador;
- Mostrar o que o servidor enviou (HTML, CSS, JS, imagens etc.);
- Interagir com o usuário (cliques, formulários, animações, etc.).

**Exemplo:** quando você clica num botão e a cor da página muda, isso é JavaScript rodando no cliente.

<div style="height: 1px"></div>

### 🔹 Servidor (Server-side)
O servidor é um **computador remoto** que armazena os arquivos do site e responde às solicitações dos usuários. Ele é responsável por:

- Receber pedidos (requisições) do cliente;
- Processar dados e lógica de negócio;
- Consultar e armazenar informações em bancos de dados;
- Enviar respostas (geralmente em formato HTML, JSON, etc.).

**Exemplo:** quando você faz login num site, o servidor verifica seu usuário e senha no banco de dados e responde se está tudo certo.

<div style="height: 1px"></div>

### 🔹 Como eles se comunicam?

- O cliente (navegador) envia uma requisição para o servidor (ex: "me mande a página inicial").
- O servidor processa a requisição e envia uma resposta com os dados (HTML, CSS, JS).
- O cliente recebe esses dados e exibe o site para o usuário.
- A partir daí, o JavaScript pode continuar executando diretamente no cliente, sem depender do servidor o tempo todo.

<div style="height: 1px"></div>

### 🔹 Onde o JavaScript entra?

|Ambiente	|Uso do JavaScript|
|-----------|-----------------|
|Cliente (Frontend)	|Interações com o usuário, animações, validações, DOM|
|Servidor (Backend)	|Processamento de dados, APIs, acesso ao banco de dados (com Node.js)|

---

## 🔵 Website
Para criar um site funcional e moderno, usamos **três tecnologias principais** que trabalham juntas como uma equipe:

<div style="height: 1px"></div>

### 🧱 HTML – Estrutura
HTML (HyperText Markup Language) é a **estrutura básica** de uma página. Ele define o que vai aparecer, como títulos, parágrafos, imagens, botões, etc.

<div style="height: 1px"></div>

### 🎨 CSS – Estilo
CSS (Cascading Style Sheets) é usado para deixar a página **bonita e estilizada**. Ele define como os elementos HTML vão aparecer: cores, tamanhos, fontes, alinhamentos, etc.

<div style="height: 1px"></div>

### 🧠 JavaScript – Comportamento
JavaScript é a parte lógica: permite **interações** com o usuário, animações, validações e muito mais. Ele adiciona inteligência e dinamismo à página.

<div style="height: 1px"></div>

### 🔹 Trabalhando Juntos
Vamos ver como essas três partes se unem em um único exemplo:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Meu Site</title>
    <style>
      button {
        background-color: green;
        color: white;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
    <button>Clique aqui</button>

    <script>
      document.querySelector("button").onclick = function () {
        alert("Você clicou!");
      };
    </script>
  </body>
</html>
```
Nesse exemplo:

- O HTML cria os elementos (`h1`, `button`);
- O CSS estiliza o botão;
- O JavaScript faz o botão responder ao clique.

--- 

### 🔵 História da Linguagem JavaScript
O JavaScript tem uma história interessante e rápida — ele nasceu para resolver um problema bem específico na web e acabou se tornando uma das linguagens **mais importantes do mundo**.

<div style="height: 1px"></div>

### 🔹 Como tudo começou?
Em 1995, a empresa Netscape (criadora de um navegador da época) queria adicionar **interatividade** às páginas web. Eles contrataram Brendan Eich, que desenvolveu o JavaScript em apenas 10 dias.

A linguagem foi criada inicialmente com o nome Mocha, depois virou LiveScript e, por fim, foi rebatizada como JavaScript.

⚠️ Apesar do nome, JavaScript **não tem relação direta com Java**. Foi só uma jogada de marketing, pois Java era muito popular na época.

<div style="height: 1px"></div>

### 🔹 Evolução rápida
JavaScript começou simples, mas cresceu muito. Com o tempo, a comunidade e as empresas passaram a exigir mais recursos, o que levou à criação do padrão ECMAScript (que veremos no próximo tópico).

Hoje, JavaScript é usado:

- No **navegador** (frontend);
- No **servidor**, com Node.js (backend);
- Em **apps mobile** (React Native);
- Em **jogos**, **IoT**, **machine learning**, e muito mais.

<div style="height: 1px"></div>

### 🔹 Curiosidades

- JavaScript é **interpretado** (não precisa ser compilado);
- Roda em praticamente **todo navegador moderno**;
- Está no **topo** das linguagens mais populares há anos.

---

## 🔵 ECMAScript
JavaScript é padronizado por uma organização chamada **ECMA International**, e o nome oficial do padrão é **ECMAScript** (abreviado como ES). Esse padrão garante que o JavaScript funcione da mesma forma em diferentes navegadores e plataformas.

<div style="height: 1px"></div>

### 🔹 Por que ECMAScript?
Logo após a criação do JavaScript, outras empresas (como a Microsoft) criaram suas próprias versões da linguagem. Para evitar confusão e padronizar o funcionamento da linguagem, foi criado um comitê chamado **TC39**, responsável por definir como o JavaScript deveria evoluir. A primeira versão oficial do padrão ECMAScript saiu em **1997**.

<div style="height: 1px"></div>

<div style="height: 1px"></div>

### 🔹 Versões Importantes
As versões do ECMAScript são atualizadas anualmente. Aqui estão as mais marcantes:

|Versão	|Lançamento|	Novidades principais|
|-------|----------|------------------------|
|ES5	|2009|	`strict mode`, JSON, métodos de array modernos|
|ES6 (ES2015)	|2015|	`let`, `const`, arrow functions, classes, promises, template literals, módulos|
|ES7+	|2016 em diante|	`async/await`, operadores lógicos modernos, métodos novos em arrays, etc.|

A versão **ES6** foi uma revolução. Depois dela, as versões passaram a ser numeradas por **ano** (ES2016, ES2017, ...).

<div style="height: 1px"></div>

### 🔹 Compatibilidade
Nem todos os navegadores antigos suportam os recursos mais novos. Por isso, ferramentas como **Babel** e **Webpack** foram criadas para “traduzir” código moderno para versões mais antigas.

---

## 🔵 Softwares Usados no Curso
Para programar em JavaScript com conforto e produtividade, vamos usar algumas ferramentas essenciais. Todas são **gratuitas**, multiplataforma (funcionam em Windows, macOS e Linux) e muito usadas na indústria.

<div style="height: 1px"></div>

### 🔹 Google Chrome
O Chrome é um navegador moderno e rápido, ideal para testes e desenvolvimento web.

- Possui ferramentas para desenvolvedores (DevTools) embutidas.
- Ajuda a inspecionar elementos HTML, aplicar estilos CSS e testar códigos JavaScript diretamente.
- Recomendado, mas você pode usar Firefox, Edge ou outro navegador moderno também.

🔗 [Download do Chrome](https://www.google.com/intl/pt-BR/chrome/)

<div style="height: 1px"></div>

### 🔹 Node.js
O Node.js é o que permite rodar código JavaScript **fora do navegador**, como se fosse uma linguagem de programação tradicional.

Com ele, você poderá:

- Executar arquivos .js diretamente no terminal;
- Criar programas e servidores;
- Utilizar o **npm** (Node Package Manager), que gerencia bibliotecas e ferramentas.

🔗 [Download do Node.js](https://nodejs.org/pt/download)

*Instale a versão LTS (Long Term Support), que é mais estável*.

<div style="height: 1px"></div>

### 🔹 Visual Studio Code (VS Code)
O VS Code é um dos editores de código mais usados no mundo. É leve, rápido e tem suporte excelente para JavaScript.

Destaques:

- Extensões úteis (como ESLint, Prettier, Live Server…);
- Terminal integrado;
- Suporte a Git, debug, snippets e muito mais.

🔗 [Download do VS Code](https://code.visualstudio.com/download)

---

## 🔵 Estrutura Básica de um Programa em JavaScript
Um programa em JavaScript pode ser **simples e direto**, especialmente quando estamos começando. Ele é composto por instruções que dizem ao computador o que fazer. Essas instruções são escritas em arquivos com a extensão `.js`.

Você pode criar um arquivo chamado app.js e escrever nele comandos como:

```js
console.log("Olá, mundo!");
```

Essa linha imprime a mensagem no console (saída de texto).

Cada instrução é normalmente escrita em uma linha e termina com **ponto e vírgula (\;\)**, embora esse ponto e vírgula seja opcional em muitos casos:

Conjuntos de instruções são agrupados entre **chaves** `{}` e são chamados de blocos de código. Isso é importante, por exemplo, em estruturas de decisão, laços e funções.

---

## 🔵 Comentários em JavaScript
Comentários são trechos do código que **não são executados**. Eles servem para **explicar** o que o código faz, deixar anotações ou desativar trechos de código temporariamente.

Existem dois tipos principais de comentários em JavaScript:

<div style="height: 1px"></div>

### 🔹 Comentário de uma linha
Usa `//` para comentar tudo que estiver após ele na mesma linha.

```js
// Isso é um comentário de uma linha
console.log("Olá, mundo!");
```

<div style="height: 1px"></div>

### 🔹 Comentário de múltiplas linhas
Usa `/* */` para envolver várias linhas de comentário.

```js
/*
Este é um comentário
de múltiplas linhas
*/
console.log("Olá mundo");
```

<div style="height: 1px"></div>

### 🔹 Boas práticas
- Comente **por quê** algo está sendo feito, não apenas o que está sendo feito.

* Evite excesso de comentários **óbvios**. Ex:

    ```js
    console.log("Olá, mundo!");  // Imprimindo "Olá, mundo" na tela ← desnecessário
    ```

- Use comentários para explicar **lógica complexa**, deixar TODOs (coisas a fazer), ou desativar código temporariamente durante testes.

---

## 🔵 Executando JavaScript no Node
O **Node.js** permite que você execute código JavaScript fora do navegador, no seu computador, de forma rápida e eficiente. Com ele, você pode rodar JavaScript no **back-end** (servidores, automações, etc.), além de usar a linha de comando para interagir com seus programas.

Com o Node.js instalado, você pode começar a rodar seus arquivos `.js` diretamente no terminal.

- Crie um arquivo JavaScript, por exemplo app.js:
    ```js
    console.log("Olá, Node!");
    ```

* Abra o terminal e execute o arquivo com o comando:
    ```js
    node app.js
    ```

- Você verá a saída:
    ```js
    Olá, Node!
    ```

---

## 🔵 DevTools
O **DevTools** (Ferramentas de Desenvolvedor) do navegador são um conjunto de ferramentas essenciais para o desenvolvimento, depuração e teste de aplicações web. Elas estão integradas diretamente nos navegadores, como o Google Chrome, e permitem que você inspecione e modifique o código das páginas em tempo real.

<div style="height: 1px"></div>

### 🔹 Acessando o DevTools
No Google Chrome, para acessar as ferramentas de desenvolvedor, basta clicar com o botão direito na página e escolher **Inspecionar**, ou pressionar as teclas Ctrl + Shift + I (Windows) ou Cmd + Option + I (Mac).

<div style="height: 1px"></div>

### 🔹 Principais Painéis do DevTools

**a) Console**
O painel Console permite que você veja as saídas do seu código JavaScript, erros e mensagens de log. Ele é útil para:

- Verificar saídas de console.log().

- Depurar erros de código.

- Interagir diretamente com o código JavaScript da página.

```js
console.log("Olá do Console!");
```


**b) Elements**
No painel Elements, você pode:

- Inspecionar e modificar o HTML e o CSS da página em tempo real.
- Alterar estilos de elementos para testar modificações visuais rapidamente.
- Ver a estrutura da árvore DOM da página.

**c) Network**
O painel Network mostra todas as requisições que a página faz para o servidor (carregamento de imagens, arquivos JS, API, etc.). Isso é muito útil para:

- Verificar se as requisições de API estão sendo feitas corretamente.
- Diagnosticar problemas de carregamento de recursos.

**d) Sources**
No painel Sources, você pode depurar o código JavaScript, adicionar breakpoints e fazer a execução passo a passo do seu código. Isso ajuda a identificar e corrigir problemas complexos no código.

**e) Application**
No painel Application, você pode visualizar e manipular o Local Storage, Session Storage, Cookies e outros dados armazenados no navegador, além de interagir com o Service Worker e as requisições de rede.

---

### 🔵 GitHub
O GitHub é uma plataforma baseada em Git, que permite o **controle de versão** e o **compartilhamento de código** com outros desenvolvedores. É amplamente utilizado para projetos de software, colaborando em equipe e armazenando código-fonte de forma segura.

**Criar uma conta:**
- Acesse: https://github.com
- Clique em **Sign Up** e preencha os dados.

**Criar um repositório:**
- Após fazer login, clique em **New Repository**
- Dê o nome: JavaScript - OxeTech Lab
- Clique em **Create repository**

**Adicionar arquivos manualmente**
- Dentro do repositório, clique em **Add file** > **Upload files**
- Escolha o arquivo `.js` ou pasta do seu computador
- Clique em **Commit changes**

**Estrutura do Repositório:**
```scss
📁 curso-javascript
├── 📁 Aula 01  
├── 📁 Aula 02  
├── 📁 Aula 03  
├── 📁 Aula 04  
├── 📁 Aula 05  
├── 📁 Aula 06  
├── 📁 Aula 07  
├── 📁 Aula 08  
├── 📁 Aula 09  
├── 📁 Aula 10  
├── 📁 Aula 11  
├── 📁 Aula 12  
├── 📁 Aula 13  
├── 📁 Aula 14  
├── 📁 Aula 15  
├── 📁 Aula 16  
├── 📁 Aula 17  
├── 📁 Aula 18  
├── 📁 Aula 19  
├── 📁 Aula 20  
```

---

## 🔵 Variáveis e Constantes

<div style="height: 1px"></div>

### 🔍 O que são variáveis?
Variáveis são **espaços na memória** onde podemos **guardar informações** que serão usadas no nosso programa, como números, textos, ou qualquer outro tipo de dado. Pense numa variável como uma **caixinha com um nome**, onde você coloca algum valor dentro para usar depois.

<div style="height: 1px"></div>

### 🔹 Declaração de variáveis:
Declarar uma variável é o mesmo que **criar uma variável**. Ao fazer isso, um espaço na memória é reservado para armazenar algum dado. 

```js
let numero;
```

<div style="height: 1px"></div>

### 🔹 Atribuição de variáveis:
Após criar uma variável, é possível **guardar uma informação** dentro dela. Esse processo é chamado de atribuição.

```js
let numero;
numero = 10;
```

<div style="height: 1px"></div>

### 🔹 Inicialização de variráveis:
Quando a declaração e a atribuição são feitas na **mesma linha**, chamamos esse processo de inicialização. Inicializar uma variável significa atribuir um valor a ela **no momento em que ela é criada**.

```js
let numero = 10;
```

<div style="height: 1px"></div>

### 🔍 O que são constantes
São variáveis cujo valor **não pode ser alterado** após a atribuição. Para declarar uma constante usamos a palavra reservada `const`.

```js
const NUMERO = 10;
NUMERO = 12;  // ❌ Erro: não é possível reatribuir uma constante
```

Existe uma convenção em programação na qual os nomes (identificadores) de constantes são escritos em **letras maiúsculas**. Essa prática ajuda a diferenciar constantes de outras variáveis no código.

<div style="height: 1px"></div>

### 🔹 Formas de declarar variáveis em JavaScript

No JavaScript moderno, usamos três palavras-chave principais para declarar variáveis:

<div style="height: 1px"></div>

#### `var` (forma antiga)

- Introduzida desde as versões mais antigas do JavaScript.
* Tem **escopo de função** (function scope).
- Pode ser **redeclarada** na mesma função, o que pode causar bugs inesperados.
* É **içada** (hoisted) — ou seja, a variável é “movida” para o topo da função antes da execução, mas sem o valor atribuído.

**Exemplo 1:**
```js
{
    var numero = 10;
}
console.log(numero);
```
Nesse exemplo, a variável `numero` pode ser acessada fora do bloco que ela foi declarada. Esse comportamente seria diferente se tivessemos usado o  `let`.

**Exemplo 2:**
```js
var numero = 10;
var numero = 12;
```
Nesse exemplo, a variável `numero` é declarada duas vezes com `var`, mas não é um comportamento ideal. Isso porque `var` permite **redeclaração no mesmo escopo**, o que pode causar erros difíceis de identificar em códigos maiores, já que uma variável pode ser sobrescrita sem aviso. 

**Exemplo 3:**
```js
console.log(numero);
var numero = 10;
```

O JavaScript realiza o chamado **"hoisting"**, que consiste em elevar a declaração da variável para o topo do escopo. Ou seja, o código acima é interpretado como:

```js
var numero;
console.log(numero);
numero = 10;
```

Por isso, o `console.log(numero)` **não dá erro**, mas imprime `undefined`, pois a variável já foi declarada, mas ainda não foi inicializada com o valor 10.

<div style="height: 1px"></div>

####  `let` (forma moderna – recomendada)
- Introduzido no ES6 (2015).

* Tem **escopo de bloco** (block scope), ou seja, só existe dentro do `{}` onde foi declarada.

- **Não pode ser redeclarada** no mesmo escopo.

* Também sofre hoisting, **mas não é inicializada**, então acessá-la antes da declaração gera erro.

**Exemplo 1:**
```js
{
    let numero = 10;
}
console.log(numero); // ❌ Erro: numero não esta definido
```
Nesse exemplo, a variável `numero` só pode ser acessada dentro do bloco onde ela foi criada.

**Exemplo 2:**
```js
let numero = 10;
let numero = 12; // ❌ Erro: 'numero' já foi declarado
```
Nesse exemplo, a redeclaração da variável `numero` gera um erro. Diferente se `numero` fosse declarado usando `var`.

**Exemplo 3:**
```js
console.log(numero);  // ❌ Erro: numero não esta definido
let numero = 10;
```
Nesse exemplo, a variável `numero` sofre hoisting, mas não é inicializada. Por isso não pode ser usada antes da declaração o que gera um erro.

<div style="height: 1px"></div>

####  `const` (constante – valor fixo)
- Também introduzido no ES6.

* Tem **escopo de bloco**, igual ao `let`.

- **Deve ser** inicializada no momento da declaração.

* **Não pode** ter seu valor reatribuído.



**Exemplo 1:**
```js
{
    const NUMERO = 10;
}
console.log(NUMERO); // ❌ Erro: NUMERO não esta definido
```
Nesse exemplo, `NUMERO` é visível apenas dentro do bloco onde foi declarado.

**Exemplo 2:**
```js
const NUMERO; // ❌ Erro: inicializador ausente na declaração const
NUMERO = 10;
```
Nesse exemplo, por não inicializar a contante `NUMERO` um erro é gerado.

**Exemplo 3:**
```js
const NUMERO = 10; // ❌ Erro: atribuição a variável constante.
NUMERO = 12;
```
Nesse exemplo, ao tentar reatribuir o valor da constante `NUMERO` é gerado um erro.

<div style="height: 1px"></div>

### 🔹 Regras para Nomeação de Variáveis
✅ **Boas práticas:**

- Nomes devem ser descritivos e fáceis de entender (`idade`, `precoProduto`).
- Usar letras minúsculas e `camelCase` para múltiplas palavras (`quantidadeMaxima`).
- Utilizar apenas letras, números e o caractere "_" (`nome_usuario`).
- Sempre começar com uma letra (não pode iniciar com números ou caracteres especiais).

❌ **Evite:**

- Usar acentos e caracteres especiais (`preço`, `número` ❌).
- Começar com números (`1idade`, 2no`me ❌).
- Utilizar palavras reservadas da linguagem (`let`, `const` ❌).

---

## 🔵 Tipos de Dados
JavaScript é uma linguagem de **tipagem dinâmica**, ou seja, você **não precisa declarar o tipo da variável** — o próprio interpretador determina isso com base no valor atribuído.

<div style="height: 1px"></div>

### 🔹 Tipos Primitivos
Estes são imutáveis, armazenam **valores diretos**:

|Tipo | O que armazena |
|-----|----------------|
| `Number`| Números inteiros ou decimais| 
| `String` | Textos |
| `Boolean` | Verdadeiro ou falso | 
| `undefined` | Valor não atribuído | 
| `null` | Intencionalmente sem valor | 

Em JavaScript, é possível criar strings utilizando três tipos de aspas: **duplas (" "**), **simples (' ')** ou **crease (\` `\)**

**Exemplo:**
```js
"Olá, mundo"
'Olá, mundo'
`Olá, mundo`
```

<div style="height: 1px"></div>

### 🔹 Tipos de Referência 
Estes armazenam **referência na memória** e podem ser modificados internamente:
|Tipo | O que armazena |
|-----|----------------|
| `Function `| Blocos de código reutilizáveis | 
| `Array ` | Lista indexada de valores |
| `Object ` | Coleção de pares chave-valor | 

<br>

O comando `typeof` é usado para saber o tipo de um dado:

```js
console.log(typeof 10);        // number
console.log(typeof "teste");   // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (comportamento antigo do JS)
```

---

## 🔵 Tipagem Dinâmica
Como já foi dito antes, o JavaScript é uma linguagem de **tipagem dinâmica**, o que significa que o tipo da variável é determinado **automaticamente** de acordo com o valor atribuído, e pode mudar ao longo do tempo. Mas o que significa na prática ?

Você pode declarar uma variável e atribuir a ela diferentes tipos de dados em momentos diferentes do código:

```js
let variavel = 42;        // tipo number
console.log(typeof variavel); // "number"

variavel = "texto";       // agora é uma string
console.log(typeof variavel); // "string"

variavel = true;          // agora é um boolean
console.log(typeof variavel); // "boolean"
```

<div style="height: 1px"></div>

##### ⚠️ Pontos de Atenção
- Isso traz **flexibilidade**, mas também pode gerar erros difíceis de rastrear se você não for cuidadoso.

* É importante **manter o propósito da variável claro** e consistente, mesmo que o JavaScript permita essa flexibilidade.

---

## 🔵 Operadores
Os operadores são símbolos que instruem o programa a **realizar operações específicas** com variáveis e valores. Em JavaScipt, os operadores estão divididos em várias categorias:

<div style="height: 1px"></div>

### 🔹 Aritméticos
São usados para fazer **operações matemáticas**:

|Operador | Operação       | Exemplo|
|---------|----------------|--------|
| `+`       | Soma         |  `x + y` |
|`-`       | Subtração      | `x - y` |
| `*`       | Multiplicação  | `x * y` |
| `/`       | Divisão        | `x / y` |
| `%`       | Módulo (resto) |  `x % y` |
| `**`       | Exponenciação |  `2 ** 3` |

<div style="height: 1px"></div>

### 🔹 Atribuição
Usados para **atribuir valores** a variáveis:

|Operador | Operação       | Exemplo|
|---------|----------------|--------|
| `=`       | Atribuição simples         |  `let a = 10` |

<div style="height: 1px"></div>

### 🔹 Aritméticos de Atribuição
São formas **resumidas** de aplicar uma operação e atribuir o resultado na mesma variável:

| Operador | Equivalente a | Exemplo   |
|----------|----------------|-----------|
| `+=`     | `x = x + y`    | `x += 2;` |
| `-=`     | `x = x - y`    | `x -= 3;` |
| `*=`     | `x = x * y`    | `x *= 4;` |
| `/=`     | `x = x / y`    | `x /= 2;` |
| `%=`     | `x = x % y`    | `x %= 5;` |
| `**=`     | `x = x ** 2`    | `x **= 2;` |

<div style="height: 1px"></div>

### 🔹 Operadores Relacionais (Comparação)
**Comparam valores** e retornam true ou false:

| Operador | Significado       | Exemplo   |
|----------|-------------------|-----------|
| `==`     | Igual  a(valor)          | `a == b`  |
| `===`     | 	Igual a (valor e tipo)          | `5 === '5'`  |
| `!=`     | Diferente de (valor)     | `a != b`  |
| `!=`     | Diferente de (valor e tipo)     | `5 !== '5'`  |
| `>`      | Maior que         | `a > b`   |
| `<`      | Menor que         | `a < b`   |
| `>=`     | Maior ou igual    | `a >= b`  |
| `<=`     | Menor ou igual    | `a <= b`  |

<div style="height: 1px"></div>

### 🔹 Lógicos
Combinam **expressões booleanas**:

| Operador | Significado         | Exemplo             |
|----------|---------------------|---------------------|
| `&&`     | E lógico (AND)      | `(x > 0 && x < 100)`|
|  `\|\|`     |  OU lógico (OR)     | `(x > 0 \|\| x < 100)`|
| `!`      | NÃO lógico (NOT)    | `!(x == 0)`         |

<div style="height: 1px"></div>

### 🔹 Incremento e Decremento
Servem para **adicionar ou subtrair 1** de uma variável, com dois formatos:

| Operador | Descrição       | Exemplo            |
|----------|------------------|--------------------|
| `++`     | Incrementa em 1  | `x++;` ou `++x;`   |
| `--`     | Decrementa em 1  | `x--;` ou `--x;`   |

A diferença está na **ordem da execução**:
- `++x`: incrementa antes de usar o valor
- `x++`: incrementa depois de usar o valor

<div style="height: 1px"></div>

### 🔹 Operador Ternário
Uma forma curta de escrever um `if-else`:

```js
condição ? valor_se_verdadeiro : valor_se_falso;
```

**Exemplo:**

```js
let idade = 16;
let maiorIdade = idade >= 18 ? "Sim" : "Não";
```
Nesse exemplo, usamos o **operador ternário** para atribuir um valor à variável `maiorIdade` com base em uma condição: se a variável `idade` for maior ou igual a 18, `maiorIdade` recebe a string `"sim"` caso contrário, recebe `"não"`. No exemplo, como `idade` é 16, que é menor que 18, a condição é falsa e `maiorIdade` será igual a `não`. Esse operador é uma forma compacta de escrever uma estrutura condicional `if-else`.

---

## 🔵 Precedência de Operadores
A ordem em que os operadores são avaliados é importante para garantir que o resultado esteja correto.

**Ordem da Precedência (maior para menor):**

1. `()` – Parênteses

2. `!`

3. `*`, `/`, `%`

4. `+`, `-`

5. `<`, `>`, `<=`, `>=`

6. `==`, `!=`

7. `&&`

8. `||`

Use parênteses para garantir clareza:
```js
let resultado = (2 + 3) * 4; // resultado = 20
```

---

## 🔵 Operador de Concatenação e Template String

<div style="height: 1px"></div>

### 🔹 Concatenação
Concatenação é o ato de **juntar** textos (strings). Em JavaScript, usamos o operador `+`:

**Exemplos:**

```js
let nome = "Ana";
let saudacao = "Olá, " + nome + "!";
console.log(saudacao); // Olá, Ana!
```

Se você usar o + com strings e números, o número é convertido para texto:

```js
let idade = 25;
console.log("Idade: " + idade); // "Idade: 25"
```

<div style="height: 1px"></div>

### 🔹  Template String
É uma forma **moderna** e mais **legível** de montar strings com variáveis e quebras de linha. Usa crases (`) em vez de aspas:

**Exemplos:**

```js
let nome = "Carlos";
let idade = 30;

let frase = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(frase); // Olám meu nome é Carlos e tenho 30 anos
```

Você também pode incluir expressões dentro de `${}`:

```js
let a = 5;
let b = 3;

console.log(`A soma de ${a} + ${b} é ${a + b}`); // A soma de 5 + 3 é 8
```

Também facilita a quebra de linha:

```js
let texto = `Essa é uma linha.
E essa é outra.`;
```

---

## 🔵 Saída de Dados
JavaScript oferece várias formas de **exibir informações** para o usuário ou para o desenvolvedor. A seguir, veja os métodos mais usados:

<div style="height: 1px"></div>

### 🔹 `console.log()`
Usado para **exibir informações no console do navegador** (geralmente para testes e debug).

```js
let nome = "Lucas";
console.log("Nome: " + nome);
```

<div style="height: 1px"></div>

### 🔹 `alert()`
Exibe uma **caixa de diálogo simples** com uma mensagem.

```js
alert("Bem-vindo ao site!");
```

Ideal para mensagens simples, mas não deve ser usado em excesso (pode atrapalhar a experiência do usuário).

---

## 🔵 Entrada de Dados
JavaScript permite **interagir com o usuário** capturando respostas diretamente do navegador por meio de caixas de diálogo simples.

<div style="height: 1px"></div>

### 🔹 `prompt()`
Exibe uma **caixa de entrada** onde o usuário pode digitar algo.
O valor digitado é sempre retornado como **string**.

```js
let nome = prompt("Qual é o seu nome?");
console.log("Nome digitado:", nome);
```

Mesmo se o usuário digitar um número, ele será retornado como string. Use `Number()` ou `parseInt()`/`parseFloat()` se quiser converter:

```js
let idade = prompt("Qual sua idade?");
idade = Number(idade);
```

<div style="height: 1px"></div>

### 🔹 `confirm()`
Mostra uma **caixa com duas opções**: OK e Cancelar. Retorna `true` se o usuário clicar em OK, ou `false` se clicar em Cancelar.

```js
let resposta = confirm("Deseja continuar?");
console.log(resposta); // true ou false
```

Muito usado em mensagens de confirmação, como "Deseja excluir este item?".

<div style="height: 1px"></div>

##### ⚠️ Importante 
Essas funções (`prompt` e `confirm`) **bloqueiam a execução do restante do código** até que o usuário responda.
Por isso, são simples e úteis para aprender, mas raramente usadas em aplicações modernas (que preferem elementos gráficos como inputs HTML).

---

## 🔵 Snippets do Google Chrome
Snippets são como pequenos **scripts de JS** que você pode escrever e executar diretamente no navegador.

<div style="height: 1px"></div>

### 🔹 Passo a passo:
-  **Abra o navegador Google Chrome** (de preferência com qualquer site aberto).

*  Pressione F12 ou use o atalho:
`Ctrl + Shift + I` (Windows/Linux)
`Cmd + Option + I` (Mac)
Isso abre o **DevTools**.

-  Vá até a aba **"Sources"**.

*  No painel da esquerda, clique em **"Snippets"**.
Se não estiver visível, clique no `>>` e selecione Snippets.

-  Clique com o botão direito e escolha:
➕ **New Snippet** (ou clique com botão direito e "Add new snippet").

*  Dê um nome (ex: `entrada.js`).

-  Escreva seu código JS, como:
```js
let nome = prompt("Qual seu nome?");
alert("Olá, " + nome + "!");
```

* Para executar, clique com o botão direito no snippet e escolha **Run**
ou pressione **Ctrl + Enter**.

<div style="height: 1px"></div>

### 🔹 Vantagens de usar Snippets:
- Funciona com qualquer recurso do navegador, como `alert`, `prompt` e `confirm`.

* Você pode salvar e reexecutar quantas vezes quiser.

- Muito útil para testar trechos de código durante os estudos.

---