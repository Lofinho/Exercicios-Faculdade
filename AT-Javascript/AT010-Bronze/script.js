// Construa um programa que determine, dada a categoria da carteira de motorista, que veículos podem ser conduzidos.

// A - Motos e triciclos.
// B - Carros de passeio.
// C - Veículos de carga acima de 3,5 toneladas.
// D - Veículos com mais de 8 passageiros.
// E - Veículos com unidade acoplada acima de 6 toneladas.
// Utilize a estrutura de controle switch e retorne mensagens adequadas, inclusive se a entrada de dados não for válida. Considere apenas uma categoria.

let categorias = ['a', 'b', 'c', 'd', 'e'];
let controle

do {
    controle = 0;

    categoriaUsuario = prompt(
        'Digite sua categora de carteira de motorista.\n(Somente 1 por vez)'
    );

    for (let i = 0; i < categorias.length; i++) {
        categoriaUsuario == categorias[i] ? controle = 1 : ''
    }
    
} while (controle == 0);

switch (categoriaUsuario.toUpperCase()) {
    case 'A':
        alert('Você só pode conduzir Motos e triciclos.');
        break;

    case 'B':
        alert('Você só pode conduzir Carros de passeio.');
        break;

    case 'C':
        alert(
            'Você só pode conduzir Veículos de carga acima de 3,5 toneladas.'
        );
        break;

    case 'D':
        alert('Você só pode conduzir Veículos com mais de 8 passageiros.');
        break;

    case 'E':
        alert(
            'Você só pode conduzir Veículos com unidade acoplada acima de 6 toneladas.'
        );
        break;
}
