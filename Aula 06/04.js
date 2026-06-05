// Existem várias funções para manipular objetos. Aqui vão algumas mais comuns.

const produto = {
  nome: "Celular", 
  preco: 2000, 
  estoque: 50
}

// keys()
let chaves = Object.keys(produto);
console.log(chaves);

// values()
let valores = Object.values(produto);
console.log(valores);

// entries()
let chaveValor = Object.entries(produto);
console.log(chaveValor);

// defineProperty
Object.defineProperty(produto, "desconto", {
  value: 10,
  writable: false,
  enumerable: true
});

console.log(produto);

// É possível usar o iterável for..in para percorrer um objeto.
for (let chave in produto) {
  console.log(`${chave}: ${produto[chave]}`);
}
