let frutas = ["maçã", "banana", "uva"];

console.log("Array original: ");
console.log(frutas);  // ["maçã", "banana", "uva"]

console.log("Adicionando um elemento no final:");
frutas.push("laranja");
console.log(frutas);  // ["maçã", "banana", "uva", "laranja"]

console.log("Removendo o último elemento:");
frutas.pop();
console.log(frutas);  // ["maçã", "banana", "uva"]

console.log("Adicionando um elemento no início:");
frutas.unshift("morango");
console.log(frutas);  // ["morango", "maçã", "banana", "uva"]

console.log("Removendo o primeiro elemento:");
frutas.shift();
console.log(frutas);  // ["maçã", "banana", "uva"]

console.log("\n\n\n");
let numeros = [1, 2, 3, 4];
let dobrados = numeros.map(num => num * 2);
console.log("Array original de números: ");
console.log(numeros);  // [1, 2, 3, 4
console.log("Array com números dobrados: ");
console.log(dobrados);  // [2, 4, 6, 8]

numeros = [1, 2, 3, 4, 5, 6];
console.log("\n\nArray original de números: ");
console.log(numeros);  // [1, 2, 3, 4]
console.log("Filtrando números pares:");
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);  // [2, 4, 6]

console.log("\n\nArray original de números: ");
console.log(numeros);  // [1, 2, 3, 4]
numeros = [1, 2, 3, 4];
console.log("Reduzindo o array para a soma dos elementos:");
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);  // 10

