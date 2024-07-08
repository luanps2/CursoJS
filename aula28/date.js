function zeroAEsquerda(num){
return num >= 10 ? num : `0${num}`
}

function formataData(data){
const dia = zeroAEsquerda(data.getDate());
const mes = zeroAEsquerda(data.getMonth()+ 1) ;
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)
console.log(data.getDay())

// const treHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + treHoras + umDia); //01/01/1970 Timestap unix ou época unix marco zero
//                     ano, mês, dia, hora, minuto, segundo, milésimo
//                        (ano, mes, dia hora, minuto e segundos)
// const data = new Date(2019, 3, 15, 14, 27);

// const data = new Date('1995-02-10 20:20:59')

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() +1); //Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Milésimo', data.getMilliseconds());
// console.log('Dia Semana', data.getDay());// 0 - domingo, 6 - sabádo
// console.log(Date.now());//retorna a "data" atual em milésimos de segundos.
// console.log(data.toString());