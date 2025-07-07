// var nome = "Leonardo";
// let idade = 22;
// const cidade = "Curitiba";

// // use let when the value can change
// // use const when the value stays the same

// console.log("\nSeu nome é " + nome + " e você tem " + idade + " anos.\n");

let nome = "Tênis Nike";      // string
let preco = 199.99;           // number
let disponivel = true;        // boolean
let desconto = null;          // null
let categoria;                // undefined

let produto = { nome: "Camiseta", preco: 49.90 }; // objeto
let cores = ["Preto", "Branco", "Azul"];          // array

console.log(typeof nome);       // string
console.log(typeof preco);      // number
console.log(typeof disponivel); // boolean
console.log(nome); 
console.log(produto); // Print the fully object with his shape
console.log(cores);   // Print the array as it is stored (shows its structure)
cores.forEach(item => console.log(item)); // Print each item(position) separately of array cores

// console.log(JSON.stringify(produto, null, 2));

// Imprimindo cada objeto pessoa com nome, idade, data_nasc
let pessoas = [
  { nome: "Ana", idade: 28, data_nasc: "1996-04-12" },
  { nome: "Bruno", idade: 35, data_nasc: "1989-02-03" },
  { nome: "Carlos", idade: 22, data_nasc: "2002-11-20" }
];
// pessoas[0].nome = "Ana"
console.log(pessoas);

// Imprimindo um por um:
// "Para cada pessoa imprima..."
pessoas.forEach(p => {
  console.log(`${p.nome} tem ${p.idade} anos (nasc: ${p.data_nasc})`);
});

