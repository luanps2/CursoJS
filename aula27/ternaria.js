const pontuacaoUsuario = 99;

//condição ? 'valor para verdadeiro' : 'valor para falso';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal'; //operação ternária substitui if else

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuario VIP');
// } else {
//     console.log('Usuario normal');
// }  