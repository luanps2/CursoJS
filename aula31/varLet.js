const verdadeira = true;

// let tem escopo de bloco
// var só tem escopo de função

 let nome = 'Luiz'; // criando
 var nome2 = 'Luiz';

 if(verdadeira) {
    let nome = 'Otavio'; // criando
    console.log(nome, nome2)
 }

 if(verdadeira) {
    console.log('OK')
 }