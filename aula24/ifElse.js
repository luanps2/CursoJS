

// if pode ser usado sozinho
// sempre que utilizo a palavra else, preciso de um if antes
// eu posso ter vários else ifs na checagem
// só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

// entre 0 e 11 = Bom dia
// entre 12 e 17 = Boa Tarde
//entre 18 e 23 = Boa noite

const hora = 24;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá usuário')
}