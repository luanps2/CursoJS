const alunos = ['Luiz', 'Maria', 'João'];

alunos.push('Luiza')
alunos.push('Eduardo')

console.log(alunos instanceof Array) //retorna o tipo do elemento
// console.log(typeof alunos) //retorna o tipo do elemento

// alunos.unshift('Luiza'); //adiciona um elemento no inicio do array
// alunos.unshift('Fabio'); //adiciona um elemento no inicio do array

// alunos[alunos.length/*traz o tamanho do array*/] = 'Antonio'; //adiciona um elemento ao final do array.

// alunos.push('aristoteles'); //adiciona um elemento ao final do array.

// alunos.pop(); //remove o ultimo elemento do array


// const removido = alunos.pop(); //remove o ultimo elemento do array
// const removido = alunos.shift(); //remove o primeiro elemento do array
// console.log(removido)
// delete alunos[1]; // remove um elemento do array sem alterar a ordem dos demais elementos
// console.log(alunos.slice(0, -1)) // quando coloca um numero negativo no segundo elemento ele faz a subtração do tamanho do array e pega o valor digitado menos(-) os ultimos elementos

// console.log(alunos[0])
// console.log(alunos[1])
// console.log(alunos[2])
// console.log(alunos[3])

//elementos que não existem caso vc tente acessa-los será exibido "undefined" como por exemplo se eu tentar acessar alunos[50]
//