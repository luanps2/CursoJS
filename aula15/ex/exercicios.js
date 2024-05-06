let numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>1 - Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>2 - ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;55
texto.innerHTML += `<p>3 - É NaN(Not a Number): ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>4 - Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>5 - Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>6 - Com duas casa decimais: ${numero.toFixed(2)}</p>`

// document.body.innerHTML += `Raiz quadrada: ${numero ** 0.5}</br></br>`;
// document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger({numero})}</br></br>`;
// document.body.innerHTML += `É NaN(Not a Number): ${Number.isNaN(numero)}</br></br>`;
// document.body.innerHTML += `Arredondado para baixo: ${Math.floor(numero)}</br></br>`;
// document.body.innerHTML += `Arredondado para cima: ${Math.ceil(numero)}</br></br>`;
// document.body.innerHTML += `Com duas casas decimais: ${parseFloat(numero).toFixed(2)}</br></br>`;

