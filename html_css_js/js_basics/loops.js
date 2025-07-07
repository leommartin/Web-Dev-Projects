// Using for loop to count from 0 to 4

for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}

// Using while loop to count from 0 to 4
let n = 0;
while (n < 5) {
  console.log("n vale:", n);
  n++;
}

// Using do...while loop to simulate a password check
let senha = 1;
do {
  senha++;  // simulação
  console.log("Senha testada:", senha);
} while (senha !== 5);

// Using for let...of... to iterate over an array
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
  console.log(fruta);
}


// Using forEach to iterate over an array
let numeros = [1, 2, 3, 4];

numeros.forEach(function(num) {
  console.log(num);
});
