const form = document.querySelector('#formulario');
form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    calcularIMC();
    console.log('evento previnido')
}); //previne o envio do form para a página não ser recarregada.

const resultadoHTML = document.querySelector('.resultado');

function calcularIMC(peso, altura) {

    peso = Number(document.getElementById('peso').value);
    altura = Number(document.getElementById('altura').value);

    const imc = peso / (altura * altura);
    let resultado;

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        resultado = "Obesidade de grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
        resultado = "Obesidade grau 2";
    } else {
        resultado = "Obesidade grau 3";
    }

    resultadoHTML.innerHTML = `<p>seu IMC é de <strong>${imc.toFixed(2)}</strong> (<strong>${resultado}<strong>)</p>`;
}
