let a = 10, b = 3;
console.log(a + b);  // soma → 13
console.log(a - b);  // subtração → 7
console.log(a * b);  // multiplicação → 30
console.log(a / b);  // divisão → 3.33...
console.log(a % b);  // resto → 1
console.log(a ** b); // exponenciação → 1000

let x = 5;
x += 2;  // x = x + 2 → 7
x *= 3;  // x = x * 3 → 21
console.log(x + '\n');

console.log(5 == '5');   // true  (compara valores, ignora tipo)
console.log(5 === '5');  // false (compara valores + tipo)
console.log(5 != '5');   // false
console.log(5 !== '5');  // true

console.log(10 > 5);     // true
console.log(3 <= 3);     // true

let idade = 8;
let cond = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(cond);
