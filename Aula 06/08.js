// O operador rest permite agrupa valores restantes em um objeto.

const usuario = {
  nome: "Ana",
  idade: 25,
  cidade: "São Paulo",
  profissao: "Desenvolvedora",
};

const { nome, ...detalhes } = usuario;

console.log(nome);
console.log(detalhes);
