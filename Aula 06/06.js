// O operador destructuring permite extrair 
// valores de objeto diretamente em variáveis.

const usuario = {
  nome: "Ana",
  idade: 25,
  cidade: "Maceió",
};

// Sem destructuring
let nomeUsuario = usuario.nome;
console.log(nomeUsuario);

// Com destructuring
let { nome, idade: idade, cidade } = usuario;

console.log(nome, idade, cidade);
