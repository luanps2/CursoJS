//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [primeiroNumero, segundoNumero, ...restante] = numeros;


// console.log(primeiroNumero, segundoNumero, restante)
//                  0        1        2         3 
//                0 1 2    0 1 2    0 1 2    0  1  2
const numeros = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]
const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]) // exibe a lista selecionada e atribuida via desestruturação


// console.log(numeros[2][1]) // exibe o segundo item da terceira lista


// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C'; //A

// const letras = [b, c, a];
// [a, b, c] = numeros;

// console.log(a, b, c)