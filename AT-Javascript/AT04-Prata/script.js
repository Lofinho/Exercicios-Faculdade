// Crie um arquivo validacoes.js contendo as seguntes funções de validação:

// - Função que verifique se o parâmetro está vazio (null, undefined e sem comprimento).
// - Função que verifique se o parâmetro tem um número mínimo de caracteres.
// - Função que verifique se o parâmetro tem um número máximo de caracteres.
// - Função que verifique se o parâmetro é um número inteiro.
// - Função que verifique se o parâmetro é um número real.
// Crie um programa que rode 10 testes com parâmetros diferentes, exibindo o resultado na console.

// Valide todas as entradas de dados.

let infos = [
    '',
    'abc',
    'abcdefg',
    7.5,
    7,
    'Leonardo Watson',
    150,
    'oi',
    0.57,
    253.2
];

for (let i = 0; i < infos.length; i++) {
    console.log(
        'Valor: ' + infos[i],
        verificaVazio(infos[i]),
        verificaMin(infos[i]),
        verificaMax(infos[i]),
        verificaInt(infos[i]),
        verificaFloat(infos[i])
    );
}