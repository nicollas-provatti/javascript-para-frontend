# 🖥️ Projeto - Parte 1: CRUD

---

## Descrição
Um CRUD é a estrutura básica da maioria das aplicações que armazenam informações. Sempre que um sistema permite criar, visualizar, editar e excluir dados, ele está implementando um CRUD. Segue alguns exemplos comuns:

## 🔹 Projeto 1: Lista de Compras

**🎯 Objetivo do Projeto:**
Construir uma aplicação para organizar itens de compra usando JavaScript e LocalStorage. O usuário poderá adicionar, editar, marcar como comprado e excluir itens da lista.

**🔧 Funcionalidades Obrigatórias:**

**1. Adicionar novo item à lista**

- Campos:
  ✔️ Nome do item
  ✔️ Quantidade
  ✔️ Categoria (ex: Alimentos, Limpeza, Higiene)

- O item deve ser salvo no LocalStorage.

**2. Listar itens cadastrados**

- Exibir os itens da lista em cards.

- Cada card deve mostrar:
  ✔️ Nome do item
  ✔️ Quantidade
  ✔️ Categoria
  ✔️ Status: Comprado ou Pendente

**3. Editar item da lista**

- Alterar qualquer campo do item (nome, quantidade ou categoria).

**4. Excluir item da lista**

- Remover o item da lista e do LocalStorage.

**5. Marcar item como “Comprado” ou “Pendente”**

- Alternar o status do item.

**6. Filtrar itens por categoria**

- Exibir somente os itens de uma determinada categoria (ex: mostrar só “Alimentos”).

**7. Persistência de dados via LocalStorage**

- Todos os itens devem ser armazenados e carregados do LocalStorage.

**🖼️ Sugestão de Estrutura do Card**
```html
<div class="item-card">
  <h3>Nome do Item</h3>
  <p>Quantidade: 3 unidades</p>
  <p>Categoria: Alimentos</p>
  <p>Status: <span>Pendente</span></p>
  <button>Marcar como Comprado</button>
  <button>Editar</button>
  <button>Excluir</button>
</div>
```

**🎨 Sugestão de Elementos da Página (HTML)**
- Formulário para adicionar novo item (Nome, Quantidade, Categoria, Botão "Adicionar").

- Área (div) onde os cards dos itens serão renderizados.

- Menu de filtro por categoria (ex: dropdown ou botões).

- (Opcional) Contador de itens comprados e pendentes.

**💡 Extras (Para alunos que quiserem ir além):**
- Exibir o número total de itens e quantos já foram comprados.

- Filtros combinados (ex: ver somente "Alimentos" que estão pendentes).

- Salvar categorias novas criadas pelo usuário.

---

## 🔹 Projeto 2: Gerenciador de Contatos
**🎯 Objetivo do Projeto**
Desenvolver uma mini agenda digital para armazenar contatos pessoais, com suporte para adicionar, editar, excluir e pesquisar contatos. Os dados devem ser salvos no LocalStorage para persistência.

**🔧 Funcionalidades Obrigatórias**

**1. Adicionar novo contato**

- Campos obrigatórios:
  ✔️ Nome
  ✔️ Telefone
  ✔️ E-mail

- O novo contato é salvo no LocalStorage.

**2. Listar contatos cadastrados**

- Exibir os contatos em cards individuais.

- Cada card deve conter:
  ✔️ Nome
  ✔️ Telefone
  ✔️ E-mail

**3. Editar contato existente**

- Permitir a edição de qualquer campo (nome, telefone ou e-mail).

**4. Excluir contato**

- Remover o contato selecionado da lista e do LocalStorage.

**5. Pesquisar contato por nome**

- Um campo de busca permite encontrar contatos rapidamente pelo nome (filtro dinâmico).

**6. Persistência de dados via LocalStorage**

- Os dados devem ser salvos no LocalStorage e carregados automaticamente ao abrir a página.

**🖼️ Sugestão de Estrutura do Card**
```html
<div class="contact-card">
  <h3>Nome do Contato</h3>
  <p>Telefone: (11) 98765-4321</p>
  <p>Email: contato@email.com</p>
  <button>Editar</button>
  <button>Excluir</button>
</div>
```

**🎨 Sugestão de Elementos da Página (HTML)**
- Formulário para adicionar novo contato (Nome, Telefone, E-mail, Botão "Adicionar").

- Campo de pesquisa para buscar contatos por nome.

- Área (div) onde os cards dos contatos serão renderizados.

**💡 Extras (Para alunos que quiserem ir além):**
- Máscara de telefone no campo de input.

- Validação de e-mail.

- Exibir imagem de perfil (pode ser um avatar padrão ou upload de imagem via base64).

- Exportar contatos em formato JSON ou CSV.

---

## 🔹 Projeto 3: Biblioteca Pessoal
**🎯 Objetivo do Projeto**
Desenvolver um sistema para gerenciar uma coleção de livros pessoais, permitindo controlar quais livros foram lidos e quais ainda faltam ler. Os dados devem ser armazenados no LocalStorage.

**🔧 Funcionalidades Obrigatórias**

**1. Adicionar novo livro à biblioteca**

- Campos obrigatórios:
  ✔️ Título do livro
  ✔️ Autor
  ✔️ Ano de publicação
  ✔️ Status de leitura (Lido / Não lido - via dropdown ou checkbox)

- O livro é salvo no LocalStorage.

**2. Listar livros cadastrados**

- Exibir os livros em cards individuais.

- Cada card deve conter:
  ✔️ Título
  ✔️ Autor
  ✔️ Ano
  ✔️ Status: Lido / Não lido

**3. Editar informações do livro**

- Permitir alteração de qualquer campo do livro.

**4. Excluir livro da biblioteca**

- Remover o livro selecionado da lista e do LocalStorage.

**5. Filtrar livros por status de leitura**

- Opção de exibir apenas livros lidos ou apenas não lidos.

**6. Persistência de dados via LocalStorage**

- Todos os dados salvos e carregados automaticamente do LocalStorage.

**🖼️ Sugestão de Estrutura do Card**
```html
<div class="book-card">
  <h3>Título do Livro</h3>
  <p>Autor: Nome do Autor</p>
  <p>Ano: 2020</p>
  <p>Status: <span>Lido</span></p>
  <button>Editar</button>
  <button>Excluir</button>
</div>
```

**🎨 Sugestão de Elementos da Página (HTML)**
- Formulário para adicionar novo livro (Título, Autor, Ano, Status, Botão "Adicionar").

- Dropdown ou botões para filtrar livros por status (Lidos / Não Lidos).

- Área (div) onde os cards dos livros serão renderizados.

**💡 Extras (Para alunos que quiserem ir além):**
- Contador de livros lidos e não lidos.

- Barra de progresso mostrando o percentual de leitura da biblioteca.

- Imagem da capa do livro (opcional via URL).

- Exportar a biblioteca como JSON.

---

## 🔹 Projeto 4: Controle de Despesas
**🎯 Objetivo do Projeto**
Criar um sistema para registrar e acompanhar despesas pessoais, ajudando o usuário a visualizar e organizar seus gastos. Os dados devem ser armazenados no LocalStorage.

**🔧 Funcionalidades Obrigatórias**

**1. Adicionar nova despesa**

- Campos obrigatórios:
  ✔️ Descrição (ex: “Almoço”, “Transporte”)
  ✔️ Valor (R$)
  ✔️ Data da despesa
  ✔️ Categoria (ex: Alimentação, Transporte, Lazer — via dropdown)

- A despesa é salva no LocalStorage.

**2. Listar despesas cadastradas**

- Exibir as despesas em cards individuais.

- Cada card deve conter:
  ✔️ Descrição
  ✔️ Valor (formatado em R$)
  ✔️ Data (formatada)
  ✔️ Categoria

**3. Editar despesa existente**

- Permitir alteração de qualquer campo da despesa.

**4. Excluir despesa**

- Remover a despesa da lista e do LocalStorage.

**5. Exibir total de despesas**

- Somatório do valor total de todas as despesas listadas.

**6. Filtrar despesas**

- Por categoria (ex: só mostrar “Alimentação”)

- Por mês/ano (ex: só mostrar despesas de Junho/2025)

**7. Persistência de dados via LocalStorage**

- Todas as despesas salvas e carregadas automaticamente do LocalStorage.

**🖼️ Sugestão de Estrutura do Card**
```html
<div class="expense-card">
  <h3>Almoço no Restaurante</h3>
  <p>Valor: R$ 45,00</p>
  <p>Data: 12/06/2025</p>
  <p>Categoria: Alimentação</p>
  <button>Editar</button>
  <button>Excluir</button>
</div>
```

**🎨 Sugestão de Elementos da Página (HTML)**
- Formulário para adicionar nova despesa (Descrição, Valor, Data, Categoria, Botão "Adicionar").

- Dropdown ou campo de data para filtrar despesas por categoria e mês.

- Exibição do total de despesas em destaque.

- Área (div) onde os cards das despesas serão renderizados.

**💡 Extras (Para alunos que quiserem ir além):**
- Gráfico simples (usando Chart.js) mostrando distribuição das categorias.

- Cores diferentes para categorias (ex: Alimentação em verde, Lazer em azul).

- Aviso de "Orçamento ultrapassado" caso um limite definido seja excedido.

- Exportar lista de despesas para CSV ou JSON.

---
