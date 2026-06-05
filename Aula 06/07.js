// O operador spread é usado para espalhar/expandir os elementos de um objeto.

const usuario = {
  nome: "Ana",
  idade: 25,
};
const endereco = {
  cidade: "Maceió",
  estado: "AL",
};

// Sem spread
const perfilCompleto = Object.assign({}, usuario, endereco);
console.log(perfilCompleto);

// Com spread
const perfil = { ...usuario, ...endereco };
console.log(perfil);

// Aplicação: o spread permiti criar cópias independetes

const produto = { nome: "Notebook", preco: 3000 };

// Cópia sem spread
const copiaSemSpread = produto;

copiaSemSpread.nome = "Smartphone";

// Cópia com spread
const copiaComSpread = { ...produto };

copiaComSpread.preco = 2500;

console.log(produto);
console.log(copiaComSpread)
