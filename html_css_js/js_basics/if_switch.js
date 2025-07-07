let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else if (idade >= 16) {
  console.log("Pode votar");
} else {
  console.log("Menor de idade");
}


// Use switch when you have multiple conditions to check
let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("Cor Vermelha");
    break;
  case "azul":
    console.log("Cor Azul");
    break;
  default:
    console.log("Cor não encontrada");
}

// Use ternary operator for simple conditions
idade = 20;
let maior_idade = idade >= 18 ? "Maior" : "Menor";
console.log(maior_idade);

