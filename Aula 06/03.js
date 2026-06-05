// É possível armazenar diferentes tipos de 
// dados em um objeto. Desde tipos simples 
// como number, string, boolean até arrays, 
// funções e até outros objetos.

const produto = {
  nome: "Smartphone",
  preco: 2000,

  categorias: ["Eletrônico", "Smartphones"],

  fabricante: {
    nome: "TechCorp",
    pais: "EUA"
  },

  aplicarDesconto: function(percentual) {
    return this.preco - (this.preco * (percentual / 100));
  }
}

console.log(produto);
console.log(produto.categorias);
console.log(produto.categorias[1]);
console.log(produto.fabricante.pais);
console.log(produto.aplicarDesconto(50));
