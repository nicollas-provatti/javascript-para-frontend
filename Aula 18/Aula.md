# 📘 Aula 18 - Assincronismo, Promises, Async/Await e Fetch API

### 🔵 Diferença entre execução síncrona e assíncrona

#### 🔹 Execução síncrona
Execução síncrona é quando as instruções do código são executadas **uma de cada vez, na ordem em que aparecem**. O JavaScript **espera** que cada linha termine para só então passar para a próxima.

**Exemplo:**
```js
console.log('Início');
console.log('Meio');
console.log('Fim');
```

**Saída:**
```scss
Início
Meio
Fim
```

O programa segue o fluxo linha por linha, sem pular nada.


#### 🔹 Execução assíncrona
Execução assíncrona, por outro lado, é quando algumas operações **não travam o fluxo principal**. O JavaScript **continua** executando as próximas linhas enquanto aquela operação (como aguardar uma resposta de um servidor, por exemplo) ainda está sendo concluída em segundo plano.

**Exemplo:**
```js
console.log('Início');

setTimeout(function() {
  console.log('Executando depois de 2 segundos');
}, 2000);

console.log('Fim');
```

**Saída:**
```scss
Início
Fim
Executando depois de 2 segundos
```

Veja que o `setTimeout` não bloqueou o fluxo!
O "Fim" foi impresso antes da função dentro do `setTimeout` ser executada.

---

### 🔵 Event Loop
O Event Loop é o mecanismo do JavaScript que **coordena** a execução de tarefas síncronas e assíncronas, garantindo que tudo aconteça na ordem certa, sem travar o navegador.

Pense assim:

- JavaScript tem uma **fila** de tarefas.

- As tarefas **síncronas** são executadas imediatamente, uma após a outra.

- As tarefas **assíncronas** (como setTimeout, requisições a APIs, Promises) são **agendadas** para serem resolvidas depois.

- Quando o JavaScript termina toda a execução síncrona, ele **verifica se há tarefas pendentes** na fila assíncrona e começa a executá-las.

**Fluxo básico:**
1. Executa todo o código **síncrono**.
2. Vai para a **fila de tarefas** e começa a executar o que chegou de assíncrono.

**Exemplo:**
```js
console.log('A');

setTimeout(() => {
  console.log('B');
}, 1000);

console.log('C');
```

**Saída:**
```css
A
C
B
```

Nesse exemplo, primeiro, o JavaScript imprime `'A'` (**síncrono**). Depois, programa o `setTimeout` para rodar depois de 1 segundo (não bloqueia). Imprime `'C'` (continuação do código síncrono). Depois de 1 segundo, a função do `setTimeout` é retirada da fila e executada, imprimindo `'B'`.

**Uma comparação:** Imagine que você está cozinhando. Você coloca um bolo no forno (**assíncrono**) e continua cortando legumes (**síncrono**). O bolo assa em segundo plano enquanto você segue fazendo outras tarefas!

---

### 🔵 `setTimeout` e `setInterval`
Essas duas funções são usadas para **agendar a execução de código** no futuro, mas de maneiras diferentes:

#### 🔹 `setTimeout`
Executa **apenas uma vez** após um tempo de espera.

**Sintaxe:**
```js
setTimeout(função, tempoEmMilissegundos);
```

**Exemplo:**
```js
setTimeout(() => {
  console.log('Executado depois de 2 segundos');
}, 2000);
```

Nesse exemplo, o código dentro da função será executado **uma vez** depois de 2 segundos.

#### 🔹 `setInterval`
Executa **repetidamente** a cada intervalo de tempo.

**Sintaxe:**
```js
setInterval(função, tempoEmMilissegundos);
```

**Exemplo:**
```js
setInterval(() => {
  console.log('Executando a cada 1 segundo');
}, 1000);
```

Nesse exemplo, a função será chamada **a cada 1 segundo**, indefinidamente.

#### 🔹 Cancelando a execução

**`setTimeout:`**
```js
const id = setTimeout(() => {
  console.log('Nunca vai rodar');
}, 3000);

clearTimeout(id);
```

**`setInterval:`**
```js
const id = setInterval(() => {
  console.log('Não vai ficar repetindo');
}, 1000);

clearInterval(id);
```

Tanto `setTimeout` quanto `setInterval` retornam um **ID** que pode ser usado para cancelar a execução com `clearTimeout` ou `clearInterval`.

---

### 🔵 Promises
Uma Promise em JavaScript representa **uma operação assíncrona** que pode resultar em:

- **Sucesso** (resolvida)
- **Erro** (rejeitada)

#### 🔹 Criando uma Promise: 
```js
const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = true; // imagine que é o resultado de alguma operação

  if (sucesso) {
    resolve('Deu tudo certo!');
  } else {
    reject('Deu ruim!');
  }
});
```

- `resolve(valor)`: chama o sucesso da promessa.
- `reject(erro)`: chama a falha da promessa.

#### 🔹 Usando `.then()` e `.catch()`

- `.then()` → é chamado quando a Promise é resolvida com sucesso.
- `.catch()` → é chamado quando a Promise é rejeitada (ocorre um erro).

**Exemplo:**
```js
minhaPromise
  .then(resultado => {
    console.log('Sucesso:', resultado);
  })
  .catch(erro => {
    console.error('Erro:', erro);
  });
```

#### 🔹 Exemplo real de Promise (simulando uma chamada de API):

```js
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dadosEncontrados = true;

      if (dadosEncontrados) {
        resolve('Dados recebidos com sucesso!');
      } else {
        reject('Erro ao buscar dados.');
      }
    }, 2000); // simula 2 segundos de atraso
  });
}

buscarDados()
  .then(resposta => {
    console.log(resposta);
  })
  .catch(erro => {
    console.error(erro);
  });
```

Nesse exemplo, estamos simulando uma requisição que demora 2 segundos. Se `dadosEncontrados` for `true`, resolve. Senão, rejeita.

---

### 🔵 Tratamento de Erros em Promises
Quando usamos Promises, o tratamento de erros normalmente é feito com o `.catch().` Como vimos antes:

```js
buscarDados()
  .then(resposta => {
    console.log(resposta);
  })
  .catch(erro => {
    console.error('Erro:', erro);
  });
```

- Se algo der errado dentro da Promise (chamar `reject()`), o `.catch()` captura o erro.
- Você também pode capturar erros em qualquer parte da cadeia de `.then()`.

**Exemplo:**
```js
buscarDados()
  .then(resposta => {
    console.log(resposta);
    throw new Error('Erro depois do sucesso');
  })
  .catch(erro => {
    console.error('Pegou erro:', erro.message);
  });
```

Mesmo o erro acontecendo depois do `.then()`, o `.catch()` ainda captura.

---

### 🔵 Introdução ao async e await
O `async/await` é uma forma moderna e mais simples de lidar com Promises, deixando o código mais parecido com código síncrono, mas funcionando de forma assíncrona.

- A palavra-chave `async` é usada antes de uma função para fazer com que ela retorne automaticamente uma Promise.
- Dentro de uma função `async`, você pode usar `await` para **esperar** o resultado de uma Promise antes de continuar a execução.

**Exemplo:**
```js
function esperarAlgo() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Terminou!'), 2000)
  })
}

// Usando async e await
async function executar() {
  console.log('Iniciando...')
  const resultado = await esperarAlgo() // Espera a Promise resolver
  console.log(resultado) // 'Terminou!'
}

executar()
```

- `async` transforma uma função normal em uma função que sempre retorna uma Promise.

- `await` **pausa** a execução da função até que a Promise ao lado dele seja resolvida.

**Regras:**

- Só podemos usar `await` dentro de funções `async`.
- O código continua **não bloqueando** o navegador, ou seja, ele fica livre para outras tarefas.

---

### 🔵 Diferença prática e sintática entre Promise e await
Vamos ver a mesma situação feita das duas maneiras:

#### 🔹 Com `.then()` (método tradicional de Promise)
```js
function esperarAlgo() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Terminou!'), 2000)
  })
}

console.log('Iniciando...')
esperarAlgo()
  .then(resultado => {
    console.log(resultado) // 'Terminou!'
  })
  .catch(erro => {
    console.error('Erro:', erro)
  })
```

- Aqui usamos `.then()` para tratar o sucesso da Promise e `.catch()` para tratar um erro.
- A leitura pode ficar "quebrada" em várias chamadas de função aninhadas.

#### 🔹 Com `async/await )` (forma moderna)
```js
function esperarAlgo() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Terminou!'), 2000)
  })
}

async function executar() {
  try {
    console.log('Iniciando...')
    const resultado = await esperarAlgo()
    console.log(resultado) // 'Terminou!'
  } catch (erro) {
    console.error('Erro:', erro)
  }
}

executar()
```

- Com `await`, o código parece mais **linear** e **mais fácil de ler**.
- O `try/catch` é usado para tratar erros, como fazemos com código síncrono normal.

---

### 🔵 Tratamento de Erros com `try...catch`
Quando usamos `async/await`, o código fica mais "linear" (parece síncrono). Nessa situação, o tratamento de erros é feito com `try...catch`.

**Exemplo:**
```js
async function executarBusca() {
  try {
    const resposta = await buscarDados();
    console.log('Resposta:', resposta);
  } catch (erro) {
    console.error('Erro no try/catch:', erro);
  }
}

executarBusca();
```

- `try` → tenta executar o código.
- `catch` → captura qualquer erro que ocorrer.

---

### 🔵 Fetch com async/await
O `fetch()` é uma função nativa do JavaScript que serve para fazer requisições HTTP — ou seja, buscar dados de servidores (como APIs). **O fetch sempre retorna uma Promise**. Usando `async/await`, conseguimos trabalhar com ele de forma muito mais clara.

**Exemplo:**
```js
async function buscarDados() {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const dados = await resposta.json()
    console.log(dados)
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro)
  }
}

buscarDados()
```

Nesse exemplo:
- `fetch()` faz a requisição para o endereço informado.

- `await fetch(...)` espera a resposta chegar.

- Depois, chamamos `await resposta.json()` para transformar a resposta em um objeto JavaScript (JSON).

- Se der erro (por exemplo, se a internet falhar ou a URL for inválida), o erro será capturado no `catch`.

**Observação importante:**
O `fetch` **não lança erro** se o servidor retornar erro HTTP (como 404 ou 500). Ele só rejeita a Promise se o problema for de rede. Então, se quiser, podemos também verificar o `resposta.ok`:

```js
async function buscarDados() {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    if (!resposta.ok) {
      throw new Error('Erro na resposta: ' + resposta.status)
    }

    const dados = await resposta.json()
    console.log(dados)
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro)
  }
}

buscarDados()
```

- `resposta.ok` é tr`ue para status de 200 a 299.
- Se não for ok, a gente lança manualmente um erro.

---

### 🔵 Trabalhando com JSON
JSON (JavaScript Object Notation) é um formato de texto usado para armazenar e transmitir dados. Ele é muito comum em APIs e bancos de dados.

Características principais do JSON:

- Usa chave-valor (`"chave": valor`).
- As chaves sempre ficam entre aspas duplas (`).
- Aceita apenas tipos de dados básicos: número, string, booleano, objeto, array e `null`.

**Exemplo de JSON:**
```js
{
  "nome": "Maria",
  "idade": 25,
  "cursos": ["JavaScript", "HTML", "CSS"]
}
```

No JavaScript, trabalhamos com JSON de duas maneiras principais:
| Função                  | O que faz                                                             |
|-------------------------|------------------------------------------------------------------------|
| `JSON.stringify(objeto)` | Converte um objeto JavaScript em uma string JSON.                     |
| `JSON.parse(string)`     | Converte uma string JSON em um objeto JavaScript.                     |

**Transformar objeto em JSON (stringify):**
```js
const aluno = {
  nome: "João",
  idade: 22,
  ativo: true
}

const jsonString = JSON.stringify(aluno)
console.log(jsonString)
// Saída: {"nome":"João","idade":22,"ativo":true}
```

**Transformar JSON em objeto (parse):**
```js
const json = '{"nome":"Ana","idade":30,"cursos":["JS","React"]}'

const objeto = JSON.parse(json)
console.log(objeto)
// Saída: { nome: 'Ana', idade: 30, cursos: [ 'JS', 'React' ] }
console.log(objeto.nome) // Acessa normalmente como objeto
```

**No caso do `fetch`**
Quando usamos `resposta.json()`, internamente o JavaScript está chamando `JSON.parse()` para transformar o texto JSON da resposta num objeto JavaScript que podemos usar no código.

Exemplo prático (relembrando):
```js
async function buscarPost() {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const dados = await resposta.json() // Faz o parse automático
  console.log(dados)
}

buscarPost()
```

**Resumo:**
- Se queremos enviar dados para uma API → usamos `JSON.stringify`.
- Se recebemos dados de uma API → usamos `resposta.json()` (que é como um `JSON.parse`).

---
