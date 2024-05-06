//string, number, undefined, null, boolean, symbol

const nome = 'Luan'; //string
const nome1 = "Luan"; //string
const nome2 = `Luan`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; // undefined -> nãoaponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)


const a = [1, 2];
const b = a;

b.push(5)
console.log(a, b);

