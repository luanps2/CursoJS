// capturar evento de submit do formulário
const form = document.querySelector('#formulario');
form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false)
        return;
    }

    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelIMc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelIMc})`;
    setResultado(msg, true);
    console.log(imc, nivelIMc)

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaParagrafo() {
    const p = document.createElement('p')
    return p
}

//cria um elemento e o adiciona na página html
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}