// Um objeto é um coleção de pares chave/valor. 
// Ele é usado para agrupar dados que possuem relação entre si.

// Motivação: as variáveis abaixo representam os 
// dados de um usário, mas não possue uma relação
//  direta entre elas. O programa "entende" elas 
// como variáveis independetes.
let nome;
let idade;
let email;

// Declaração de um objeto
const usuario = {
  nome: "Lucas",
  idade: 17,
  email: "lucas@gmail.com",
};

console.log(usuario);

// Modificação e Acesso em um objeto
usuario.nome = "Lucas Marques";
usuario.altura = 1.76;

console.log(usuario);
