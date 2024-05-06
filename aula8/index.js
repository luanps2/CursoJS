/* 
Luan Costa tem 28 anos, pesa 79 kg
tem 1.68 de altura e seu IMC é de 27.42 
*/

const nome = 'Luan';
const sobrenome = 'Costa';
const idade = 28;
const peso = 78;
const alturaEmM = 1.68; 
let imc;
let anoNascimento;

imc = peso / (alturaEmM *  alturaEmM);
anoNascimento = 2023 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kgs, tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`)