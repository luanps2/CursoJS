let num1 = 0.7; //number
let num2 = 0.1; //number
let temp = num1 * '5';

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0
// num1 += num2; // 0.9
// num1 += num2; // 1.0
// num1 += num2; // 1.1
// num1 += num2; // 1.2
// num1 += num2; // 1.3
// num1 += num2; // 1.4
// num1 += num2; // 1.5
// num1 += num2; // 1.6
// num1 += num2; // 1.7
// num1 += num2; // 1.8
// num1 += num2; // 1.9
// num1 += num2; // 2.0

num1 = parseFloat(num1.toFixed(2)); // converte uma determinada variavel para Float
num1 = Number(num1.toFixed(2)); // converte uma determinada variável para number

console.log(num1 + num2); // soma de duas variavéis
console.log(num1.toString() + num2); // concatenação de variavel com numero
console.log(typeof num1); // exibe o tipo da variavel
console.log(num1.toString(2)); // exibe o valor binário da váriavel
console.log(num1.toFixed(2)); // arrendonda o valor para a quantidade de casa decimais estipuladas.
console.log(Number.isInteger(num1)); // verifica se determinada variavel é um número inteiro
console.log(Number.isNaN(temp)); // verifica se determinada variavel não é um número
console.log(num1);
console.log(Number.isInteger(num1));

