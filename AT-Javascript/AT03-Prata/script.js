// Crie uma functiján que, dado um ano, retorne verdadeiro se for bissexto ou falso caso contrário.

// Crie um programa que rode 5 testes com anos diferentes, exibindo o resultado na console.

// Valide todas as entradas de dados.

let ano;

do {
    ano = Number(prompt('Digite o ano'));
} while (!(ano >= 1000));

function verificaBissexto(ano) {

    ano % 400 == 0 ? alert('O ano é bissexto') : ano % 4 == 0 && ano % 100 != 0 ? alert('O ano é bissexto') : alert('Ano não bissesto')
}

verificaBissexto(ano);

function verificaBissextoConsole(ano) {
    ano % 400 == 0
        ? console.log('O ano é bissexto')
        : ano % 4 == 0 && ano % 100 != 0
        ? console.log('O ano é bissexto')
        : console.log('Ano não bissesto');
}


for(let i = 1; i <= 5; i++){

    const vMin = 1000;
    const vMax = 3000;
    let aleatorio = Math.floor(Math.random() * (vMax - vMin + 1) + vMin);

    ano = aleatorio;
    console.log(`${i} - ${ano}`)

    verificaBissextoConsole(ano)
}
