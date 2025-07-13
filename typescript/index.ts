import { exec } from "child_process";

let nome: string = "Leonardo";
let idade: number = 22;
let estaAtivo: boolean = true;

console.log("Olá, " + nome);
console.log("Você tem " + idade + " anos.");

let numeros: number[] = [1, 2, 3];
let nomes: string[] = ["Ana", "João"];

console.log("Números:", numeros);
console.log("Nomes:", nomes);

// Define variable types using type annotations
// Then, assign values to the variables
let pessoa: { nome: string, idade: number, ativo: boolean } = {
    nome: "Carlos",
    idade: 40,
    ativo: true
};

// Pessoa is a personalized type with specific properties
// Aluno is an object of type Pessoa
type Pessoa = {
  nome: string;
  idade: number;
};
let aluno: Pessoa = {
  nome: "Lucas",
  idade: 20
};
console.log("Aluno:", aluno);


// Accept string or number for CPF
let cpf: string | number;

cpf = "123.456.789-00"; // ✅
cpf = 12345678900;      // ✅
console.log("CPF:", cpf);
// cpf = true;          // ❌ error

// Function with Typescript (with type annotations)
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}
let saudacao_str:string = saudacao("Washington"); 
// saudacao(123); // ❌ error, expected string
console.log(saudacao_str); 

function saudacaoVoid(nome: string): void {
  console.log(`Olá, ${nome}!`);
}
saudacaoVoid("Marinez");

// Arrow Functions with TypeScript
const multiplicar = (x: number, y: number): number => {
  return x * y;
};
console.log("\n>> Multiplicação com Arrow Function:");
console.log("Resultado da multiplicação 5 * 10: "+ multiplicar(5, 10));

// Union Types
function exibirIdade(idade: string | number): void {
  console.log(`Idade: ${idade}`);
}

console.log("\n>> Exibindo Idade:");
exibirIdade(30); // Calling exibirIdade with a number
exibirIdade("30 anos"); // Calling exibirIdade with a string

function imprimirId(id: number | string) {
  if (typeof id === "string") { // Check if id is a string
    console.log("ID em letras:", id.toUpperCase());
  } else {
    console.log("ID numérico:", id);
  }
}
console.log("\n>> Imprimindo IDs:");
imprimirId(123); // numeric ID : 123
imprimirId("abc"); // String ID: ABC

// Optional Parameters
function saudacaoOpt(nome: string, sobrenome?: string) {
  if (sobrenome) {
    console.log(`Olá, ${nome} ${sobrenome}`);
  } else {
    console.log(`Olá, ${nome}`);
  }
}

console.log("\n>> Imprimindo saudação com sobrenome opcional:");
saudacaoOpt("Leonardo");
saudacaoOpt("Leonardo", "Martin");

// Types with Optional Properties
// We can define types with optional properties using the '?' symbol
type Produto = {
  nome: string;
  preco: number;
  descricao?: string;
};

// Here, we don't need to provide the 'descricao' property
// This does not generate an error
const notebook: Produto = {
  nome: "Notebook",
  preco: 2500
};

// Combining Types
type Product = {
  nome: string;
  preco: number;
};

type Eletronico = Product & {
  voltagem: number;
};

// Interfcaes can be reopened and extended, Types cannot
interface Pessoa2 {
  nome: string;
}
interface Pessoa2 {
  idade: number;
}
