# 📘 Aula 7 - DOM

###  🔍 O que é o DOM ?
O **DOM** (Document Object Model) é uma estrutura que representa toda a página web na forma de uma árvore de objetos. Cada elemento do HTML — como `<div>`, `<p>`,` <h1>`, `<button>`, etc. — vira um nó dentro dessa árvore. Quando o navegador carrega um site, ele transforma o HTML em DOM. Isso permite que o JavaScript possa acessar, modificar, adicionar ou remover elementos da página em tempo real.
**Em outras palavras:** O DOM é o que permite ao JavaScript interagir e mudar o que o usuário vê na página.

**Exemplo:**
Imagine esse HTML:
```html
<body>
  <h1>Olá, mundo!</h1>
  <p>Bem-vindo ao curso de JavaScript!</p>
</body>
```

O DOM desse código seria como:

```less
- body
  - h1 ("Olá, mundo!")
  - p ("Bem-vindo ao curso de JavaScript!")
```

O `body` é o elemento "pai", e dentro dele existem dois "filhos": um `h1` e um `p`.

**DOM de uma página:**

![DOM](https://hermes.dio.me/articles/cover/f3b3ba36-5377-4a95-8068-f1b09bec56c7.png)

---

### 🔵 Adicionando o JavaScript no HTML
Existem três formas principais de adicionar JavaScript a uma página HTML: dentro da própria página HTML, por meio de um arquivo externo ou diretamente em eventos de elementos HTML. Vamos ver cada uma delas.

#### 🔹 JavaScript Interno
Você pode escrever o código JavaScript diretamente dentro da tag `<script>` no próprio arquivo HTML. O código JavaScript será executado no momento em que a página for carregada.

**Exemplo:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de JS</title>
</head>
<body>
    <h1>Minha Página</h1>
    
    <script>
        alert("Olá, JavaScript está funcionando!");
    </script>
</body>
</html>
```

**Onde colocar o script:** Você pode colocar o `<script>` dentro da tag `<head>` ou no final da tag `<body>`. A recomendação é colocar o `<script>` no final do `<body>`, para que o HTML carregue primeiro.

#### 🔹 JavaScript Externo
Uma boa prática é manter o JavaScript em arquivos separados. Você cria um arquivo com a extensão `.js` e então faz referência a ele no seu arquivo HTML.

**Exemplo:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exemplo Externo de JS</title>
</head>
<body>
    <h1>Minha Página com JS Externo</h1>
    
    <!-- Incluindo o arquivo JS -->
    <script src="script.js"></script>
</body>
</html>
```

```js
alert("Olá, esse é o JS externo!");
```

**Onde colocar o `script`:** Como no exemplo anterior, o `<script>` deve estar no final do `<body>`, para que a página HTML carregue antes do script.

#### 🔹 JavaScript em Atributos HTML
Você também pode adicionar JavaScript diretamente a eventos HTML, como `onclick`, `onmouseover`, `onchange`, etc., para que o código JavaScript seja executado em resposta a uma interação do usuário com um elemento da página.

**Exemplo:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Evento Inline</title>
</head>
<body>
    <button onclick="alert('Botão clicado!')">Clique em mim</button>
</body>
</html>
```

**Onde colocar o JavaScript:** Nesse caso, o código JavaScript é colocado diretamente no atributo do evento. Embora seja útil em situações simples, não é recomendado para projetos maiores, pois dificulta a manutenção do código.

---

### 🔵 Selecionando Elementos no DOM
Para interagir com a página web usando JavaScript, você precisa selecionar elementos do DOM. Existem várias maneiras de fazer isso, e as mais comuns são:

#### 🔹 `getElementById()`
Seleciona um elemento com base no seu ID.

**Exemplo:**
```js
<div id="minhaDiv">Conteúdo</div>

<script>
  var elemento = document.getElementById('minhaDiv');
  console.log(elemento); // <div id="minhaDiv">Conteúdo</div>
</script>
```

**Nota:** O ID é único na página, então esse método retorna **apenas um elemento**.

#### 🔹 `getElementsByClassName()`
Seleciona todos os elementos com uma classe específica.

**Exemplo:**
```html
<p class="texto">Parágrafo 1</p>
<p class="texto">Parágrafo 2</p>

<script>
  var elementos = document.getElementsByClassName('texto');
  console.log(elementos); // [<p class="texto">Parágrafo 1</p>, <p class="texto">Parágrafo 2</p>]
</script>
```

**Nota:** Retorna uma coleção de elementos chamada HTMLCollection (não é um array), mesmo que haja apenas um elemento com a classe.

#### 🔹 `getElementsByTagName()`
Seleciona todos os elementos com uma tag específica.

**Exemplo:**
```html
<div>Div 1</div>
<div>Div 2</div>

<script>
  var divs = document.getElementsByTagName('div');
  console.log(divs); // [<div>Div 1</div>, <div>Div 2</div>]
</script>
```

**Nota:** Retorna uma coleção de elementos (HTMLCollection) com a tag fornecida.

#### 🔹 `querySelector()`
Seleciona o primeiro elemento que corresponde ao seletor CSS fornecido.

**Exemplo:**
```html
<div class="caixa">Conteúdo</div>
<p>Texto de parágrafo</p>

<script>
  var elemento = document.querySelector('.caixa');
  console.log(elemento); // <div class="caixa">Conteúdo</div>
</script>
```

**Nota:** Retorna apenas o primeiro elemento que corresponder ao seletor. Para selecionar pelo ID usamos o hastag (#) e pela classe o ponto (.).

#### 🔹 `querySelectorAll()`
Seleciona todos os elementos que correspondem ao seletor CSS.

**Exemplo:**
```html
<p class="paragrafo">Parágrafo 1</p>
<p class="paragrafo">Parágrafo 2</p>

<script>
  var elementos = document.querySelectorAll('.paragrafo');
  console.log(elementos); // NodeList [<p class="paragrafo">Parágrafo 1</p>, <p class="paragrafo">Parágrafo 2</p>]
</script>
```

**Nota:** Retorna uma NodeList (similar a um array, mas não exatamente um array).

#### 🔹 Resumo
| Método                        | Descrição                                              |
|-------------------------------|--------------------------------------------------------|
| `getElementById()`             | Seleciona um único elemento pelo ID.                   |
| `getElementsByClassName()`     | Seleciona elementos pelo nome da classe.               |
| `getElementsByTagName()`       | Seleciona elementos pelo nome da tag.                  |
| `querySelector()`              | Seleciona o primeiro elemento que corresponde ao seletor CSS. |
| `querySelectorAll()`           | Seleciona todos os elementos que correspondem ao seletor CSS. |

---

### 🔵 Diferença entre HTMLCollection e NodeList
Ao trabalhar com o DOM, muitas vezes, ao selecionar múltiplos elementos, o JavaScript retorna coleções de nós. Essas coleções são frequentemente do tipo **HTMLCollection** ou **NodeList**. Embora ambas representem grupos de elementos, elas têm algumas diferenças importantes em termos de funcionalidade e comportamento.

#### 🔹 HTMLCollection
O  HTMLCollection é uma coleção de elementos HTML retornada por métodos como `getElementsByTagName()` ou `getElementsByClassName()`.

**Características:**
- **Ao vivo:** Um HTMLCollection é uma coleção "ao vivo", o que significa que ele é atualizado automaticamente se o DOM for alterado (se você adicionar ou remover elementos).

* **Métodos:** Não possui todos os métodos de iteração, como `forEach()`. Você precisa usar um laço tradicional, como `for` ou `for...of`.

- **Acesso por índice:** Você pode acessar elementos usando um índice numérico, como se fosse um array, mas não é um array real.

**Exemplo:**
```js
let elementos = document.getElementsByTagName("p");
console.log(elementos); // HTMLCollection
console.log(elementos[0]); // Acessando o primeiro parágrafo

// Modificando o DOM
document.body.appendChild(document.createElement("p")); // Adiciona um novo parágrafo
console.log(elementos); // A HTMLCollection é atualizada automaticamente
```

#### 🔹 NodeList
O NodeList é uma coleção de nós que pode incluir elementos do DOM (e também outros tipos de nós, como nós de texto ou comentários), retornada por métodos como `querySelectorAll()`.

**Características:**
- **Não ao vivo:** Diferentemente do HTMLCollection, um NodeList geralmente não é ao vivo, ou seja, não se atualiza automaticamente quando o DOM muda.

* **Métodos:** Um NodeList possui o método forEach(), o que facilita a iteração.

- **Acesso por índice:** Como um array, é possível acessar os elementos por índice.

**Exemplo:**
```js
let itens = document.querySelectorAll("p");
console.log(itens); // NodeList
console.log(itens[0]); // Acessando o primeiro parágrafo

// Modificando o DOM
document.body.appendChild(document.createElement("p")); // Adiciona um novo parágrafo
console.log(itens); // O NodeList **não** será atualizado automaticamente
```

#### 🔹 Resumo 
| Característica               | HTMLCollection                         | NodeList                             |
|------------------------------|----------------------------------------|--------------------------------------|
| Ao vivo                      | Sim (automaticamente atualizado)       | Não (não é atualizado automaticamente)|
| Métodos de iteração          | Não tem `forEach()`, precisa usar `for` | Tem `forEach()`, que facilita a iteração |
| Acesso por índice            | Sim, mas não é um array verdadeiro     | Sim, e é mais similar a um array    |
| Tipos de elementos           | Apenas elementos HTML                 | Pode incluir outros tipos de nós (ex.: texto, comentários) |

---

### 🔵 Propriedades do DOM
Quando acessamos um elemento do DOM, ele possui várias propriedades que podem ser usadas para alterar ou obter informações sobre ele. Vamos explorar algumas das propriedades mais comuns e úteis.

#### 🔹 `innerHTML`
A propriedade `innerHTML` permite acessar ou modificar o conteúdo HTML de um elemento. Ela retorna uma string com o conteúdo HTML do elemento.

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
console.log(div.innerHTML); // Retorna o conteúdo HTML da div

div.innerHTML = "<p>Novo conteúdo HTML!</p>"; // Modifica o conteúdo da div
```

#### 🔹 `textContent`
A propriedade `textContent` permite acessar ou modificar o conteúdo de texto de um elemento. Diferente de `innerHTML`, ela não interpreta o conteúdo como HTML, ou seja, se você passar HTML, ele será tratado como texto.

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
console.log(div.textContent); // Retorna o conteúdo de texto da div

div.textContent = "Novo conteúdo de texto!"; // Modifica o conteúdo de texto da div
```

#### 🔹 `className`
A propriedade `className` permite acessar ou modificar a lista de classes de um elemento. É útil para adicionar ou remover classes CSS de um elemento.

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
console.log(div.className); // Retorna as classes do elemento

div.className = "novaClasse"; // Modifica as classes do elemento
```

#### 🔹 `id`
A propriedade `id` permite acessar ou modificar o identificador único de um elemento. Esse valor deve ser único dentro da página.

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
console.log(div.id); // Retorna o id do elemento

div.id = "novaId"; // Modifica o id do elemento
```

#### 🔹 `style`
A propriedade `style` permite acessar ou modificar os estilos CSS diretamente do JavaScript, usando a notação de propriedades CSS em camelCase.

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
div.style.backgroundColor = "yellow"; // Modifica o fundo da div
div.style.fontSize = "20px"; // Modifica o tamanho da fonte
```

#### 🔹 `attributes`
A propriedade `attributes` retorna todos os atributos de um elemento como um objeto `NamedNodeMap`. Isso pode ser útil para obter ou modificar atributos de um elemento diretamente.

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
console.log(div.attributes); // Retorna todos os atributos do elemento

// Modificando um atributo
div.setAttribute("data-custom", "valorPersonalizado");
console.log(div.getAttribute("data-custom")); // Retorna "valorPersonalizado"
```

#### 🔹 Resumo 

| Propriedade     | Descrição                                                                |
|-----------------|--------------------------------------------------------------------------|
| `innerHTML`     | Define ou retorna o conteúdo HTML de um elemento, incluindo tags HTML.   |
| `textContent`   | Define ou retorna o conteúdo de texto de um elemento, sem tags HTML.     |
| `className`     | Define ou retorna o nome da classe de um elemento.                       |
| `id`            | Define ou retorna o atributo de identificação (ID) de um elemento.       |
| `style`         | Define ou retorna o atributo `style` (CSS inline) de um elemento.        |
| `attributes`    | Retorna uma coleção de todos os atributos de um elemento.                |

---

### 🔵 Manipulação de Atributos
Os atributos dos elementos HTML são partes importantes para definir características desses elementos, como seu identificador (`id`), classes (`class`), links (`href`), entre outros. O JavaScript oferece formas poderosas de acessar e manipular esses atributos dinamicamente.

#### 🔹 `getAttribute()`
A função `getAttribute()` é usada para obter o valor de um atributo específico de um elemento.

**Exemplo:**
```js
let link = document.getElementById("meuLink");
console.log(link.getAttribute("href")); // Retorna o valor do atributo "href" do link
```

#### 🔹 `setAttribute()`
A função `setAttribute()` permite modificar o valor de um atributo de um elemento.

**Exemplo:**
```js
let link = document.getElementById("meuLink");
link.setAttribute("href", "https://www.novosite.com"); // Altera o valor do atributo "href"
```

#### 🔹 `removeAttribute()`
A função `removeAttribute()` é usada para remover um atributo de um elemento.

**Exemplo:**
```js
let link = document.getElementById("meuLink");
link.removeAttribute("href"); // Remove o atributo "href" do link
```

#### 🔹 `hasAttribute()`
A função `hasAttribute()` verifica se um determinado atributo existe no elemento. Ela retorna `true` se o atributo estiver presente, e `false` caso contrário.

**Exemplo:**
```js
let link = document.getElementById("meuLink");
console.log(link.hasAttribute("href")); // Retorna true se o atributo "href" existir
```

#### 🔹 Resumo
| Método               | Descrição                                                              |
|----------------------|------------------------------------------------------------------------|
| `getAttribute()`      | Retorna o valor de um atributo especificado de um elemento.            |
| `setAttribute()`      | Define ou altera o valor de um atributo de um elemento.                |
| `removeAttribute()`   | Remove um atributo de um elemento.                                     |
| `hasAttribute()`      | Verifica se um elemento possui um atributo especificado.               |

---

### 🔵 Manipulação de Classes
As classes CSS são essenciais para estilizar os elementos em uma página web, e no JavaScript, é comum a necessidade de adicionar, remover ou verificar classes em elementos HTML. O DOM fornece algumas funções poderosas para trabalhar com as classes de forma dinâmica.

A propriedade `classList` fornece uma lista das classes de um elemento e permite manipulá-las de forma simples e eficiente. Os principais métodos são:

#### 🔹 `add()`
Adiciona uma ou mais classes ao elemento.

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
div.classList.add("novaClasse"); // Adiciona a classe "novaClasse" ao elemento
```

#### 🔹 `remove()`
Remove uma ou mais classes do elemento.

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
div.classList.remove("classeAntiga"); // Remove a classe "classeAntiga" do elemento
```

#### 🔹 `toggle()`
Alterna a presença de uma classe (adiciona se não existir, remove se já existir).

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
div.classList.toggle("classeAtiva"); // Se a classe "classeAtiva" estiver presente, ela será removida; caso contrário, será adicionada
```

#### 🔹 `contains()`
Verifica se o elemento possui uma determinada classe.

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
if (div.classList.contains("minhaClasse")) {
  console.log("A classe existe!");
} else {
  console.log("A classe não existe.");
}
```

#### 🔹 `replace()`
Substitui uma classe existente por outra.

**Exemplo:**
```js
let div = document.getElementById("minhaDiv");
div.classList.replace("classeAntiga", "classeNova"); // Substitui "classeAntiga" por "classeNova"
```

#### 🔹 Resumo
| Método        | Descrição                                                                |
|---------------|--------------------------------------------------------------------------|
| `add()`       | Adiciona uma ou mais classes a um elemento.                              |
| `remove()`    | Remove uma ou mais classes de um elemento.                               |
| `toggle()`    | Adiciona uma classe se não estiver presente, ou remove se já estiver.    |
| `contains()`  | Verifica se um elemento possui uma classe especificada.                  |
| `replace()`   | Substitui uma classe por outra em um elemento.                           |

#### Qual usar  `className` ou `classList`
- **classList** é uma forma moderna e prática para manipular as classes de um elemento HTML. Ele permite adicionar, remover, alternar e verificar classes de maneira eficiente.

* **className** também pode ser usado para manipular classes, mas com a limitação de substituir todas as classes de um elemento por uma nova string.

---