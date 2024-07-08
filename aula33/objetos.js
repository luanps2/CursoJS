const pessoa = {
    nome: 'Luan',
    sobrenome: 'Costa',
    idade: 29,
    endereço: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome = 'não existe', sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);