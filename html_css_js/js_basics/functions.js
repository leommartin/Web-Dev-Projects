// Function to greet a user
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

console.log(saudacao); 
saudacao("Leonardo"); 

// Function to sum two numbers
function somar(a, b) {
  return a + b;
}

console.log(somar);         // Exibe a função somar
let resultado = somar(5, 3);
console.log(resultado); 

// Function to greet
function dar_ola() {
  console.log("Olá!");
}

console.log(dar_ola);       // Exibe a função dar_ola
dar_ola(); 

// Function to multiply two numbers
function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar);    // Exibe a função multiplicar
let res = multiplicar(5, 3);
console.log(res); 


/* Arrow Functions ---------------- */

// function dobro(x) {
//   return x * 2;
// }

// Arrow function catch the value of x and return the double of it
// Storing the return value of the function in a variable
let x = 5;
const dobro = (x) => x * 2;

// const dobro = (x) => {
//   return x * 2;
// };

console.log(dobro);        
console.log("x = " + x); // Exibe o valor de x
console.log(dobro(5));  

const primeiraLetra = x => x[0];
console.log(primeiraLetra("ChatGPT"));  // C



