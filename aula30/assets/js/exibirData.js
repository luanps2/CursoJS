// forma extensa
const data = new Date(2019, 9, 7, 22, 52);

let diaSemana;
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();
let texto;
let tag;

// switch (data.getDay()) {
//     case 0: diaSemana = 'Domingo'; break;
//     case 1: diaSemana = 'Segunda-feira'; break;
//     case 2: diaSemana = 'Terça-feira'; break;
//     case 3: diaSemana = 'Quarta-feira'; break;
//     case 4: diaSemana = 'Quinta-feira'; break;
//     case 5: diaSemana = 'Sexta-feira'; break;
//     case 6: diaSemana = 'Sábado'; break;
//     default: diaSemana = 'Data inválida';
// }

// switch (data.getMonth()) {
//     case 0: mes = 'Janeiro'; break;
//     case 1: mes = 'Fevereiro'; break;
//     case 2: mes = 'Março'; break;
//     case 3: mes = 'Abril'; break;
//     case 4: mes = 'Maio'; break;
//     case 5: mes = 'Junho'; break;
//     case 6: mes = 'Julho'; break;
//     case 7: mes = 'Agosto'; break;
//     case 8: mes = 'Setembro'; break;
//     case 9: mes = 'Outubro'; break;
//     case 10: mes = 'Novembro'; break;
//     case 11: mes = 'Dezembro'; break;
//     default: mes = 'Data inválida';
// }

// tag = document.querySelector('.container h1');

// texto = `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minutos}`;

// tag.innerHTML = texto;

// console.log(texto);


// forma simples

// const tag = document.querySelector('.container h1');
// const dataAtual = new Date();
// const opcoes = { 
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// tag.innerHTML = data.toLocaleString('pt-BR', opcoes);

//solução do professor

function getNomeMes(numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes]

}

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabádo'];
    return diasSemana[diaSemana];
}


function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);


    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
    )


}

tag = document.querySelector(".container h1");
tag.innerHTML = criaData(data);


