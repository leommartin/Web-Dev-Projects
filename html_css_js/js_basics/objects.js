let pessoa = {
  nome: "Leonardo",
  idade: 25,
  cidade: "Curitiba"
};

console.log(pessoa.nome);  // "Leonardo"
console.log(pessoa.idade); // 25
console.log(pessoa.cidade); // "Curitiba"
pessoa.profissao = "Dev";  // adiciona
console.log(pessoa.profissao);

delete pessoa.profissao; // remove
console.log(pessoa.profissao + "\n\n"); // undefined

pessoa.idade = 26;         // modifica

// Array de objetos
let pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 30 },
  { nome: "Beatriz", idade: 25 }
];

// Imprimindo cada objeto pessoa com nome e idade
pessoas.forEach(p => {
  console.log(p.nome + " tem " + p.idade + " anos");
});

// Criando array de nomes a partir do array de objetos (pessoas)
let nomes = pessoas.map(p => p.nome);
console.log(nomes);  // ["Ana", "Carlos", "Beatriz"]

// Filtrando pessoas maiores de 25 anos a partir do array de objetos (pessoas)
let maiores = pessoas.filter(p => p.idade >= 25);
console.log(maiores);
// [{ nome: "Carlos", idade: 30 }, { nome: "Beatriz", idade: 25 }]

// Reduzindo o array de objetos (pessoas) para a soma das idades
let idadeTotal = pessoas.reduce((acum, p) => acum + p.idade, 0);
console.log(idadeTotal);  // 75
