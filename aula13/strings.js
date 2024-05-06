// let umaString = "Um \"texto\""; //para inserir aspas dentro de uma string basta usar uma barra invertida antes das aspas internas(caractere de escape)
let umaString = "O rato roeu a roupa do rei de roma"; //para inserir aspas dentro de uma string basta usar uma barra invertida antes das aspas internas(caractere de escape)
console.log(umaString.concat(' em um lindo dia')); //concatenação com função concat
console.log(umaString + ' em um lindo dia'); // concatenação com '+'
console.log(`${umaString} em um lindo dia.`); // template string
console.log(umaString.indexOf('t')); //busca index 
console.log(umaString.lastIndexOf('t')); //busca index de trás pra frente
console.log(umaString.match(/[a-z]/g)); //expressões regulares(busca todas letras de a a z minusculas na string)
console.log(umaString.search(/x/)); //pesquisa na string qual o index(posição) da letra inserida.
console.log(umaString.replace('Um', 'Outra')); //substitui uma palavra por outra.
console.log(umaString.replace(/t/, 'Y')); //substitui uma palavra por outra no primeiro index encontrado.
console.log(umaString.replace(/t/g, 'Y')); //substitui uma palavra por outra em todos os indx encontrados por conta da flag 'g'.
console.log(umaString.length); //exibe o tamanho da string
console.log(umaString.slice(0, 3)); // fatia a string de um ponto inicial até um ponto final
console.log(umaString.slice(-5)); // fatia a string de um ponto contatando o tamanho total substraindo o negativo que foi inserido.
console.log(umaString.substring(umaString.length-5)); // retorna a palavra relacionado ao indice index calculado
console.log(umaString.split(' ')); //divide a string de acordo com o caractere inserido.
console.log(umaString.split(' ', 2)); //divide a string de acordo com o caractere inserido de acordo com o numero solicitado.
console.log(umaString.toUpperCase()); //deixa toda a strinf em MAIÚSCULA
console.log(umaString.toLowerCase()); //deixa toda a strinf em minúscula