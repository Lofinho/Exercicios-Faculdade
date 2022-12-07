// Crie um programa que receba na entrada o valor de três notas de um aluno - com valor entre 0 e 10 e informe a média entre elas.

// Não é necessário validar se as notas estão dentro do intervalo válido.

do {
    n1 = Number(prompt('Digite a primeira nota'));
} while (!(n1 >= 0 && n1 <= 10) || isNaN(n1));

do {
    n2 = Number(prompt('Digite a segunda nota'));
} while (!(n2 >= 0 && n2 <= 10) || isNaN(n2));

do {
    n3 = Number(prompt('Digite a terceira nota'));
} while (!(n3 >= 0 && n3 <= 10) || isNaN(n3));

let media = (n1 + n2 + n3) / 3;

alert(`A média do aluno é ${media.toFixed(2)}`);


/*
let n1, n2, n3;

for (let i = 1; i <= 3; i++) {
    if (i == 1) {
        do {
            n1 = Number(prompt(`Digite a nota ${i}`));
        } while (!(n1 >= 0 && n1 <= 10) || isNaN(n1));
    } else if (i == 2) {
        do {
            n2 = Number(prompt(`Digite a nota ${i}`));
        } while (!(n2 >= 0 && n2 <= 10) || isNaN(n2));
    } else if (i == 3) {
        do {
            n3 = Number(prompt(`Digite a nota ${i}`));
        } while (!(n3 >= 0 && n3 <= 10) || isNaN(n3));
    }
}

let media = (n1 + n2 + n3) / 3;

alert(`A média do aluno é ${media.toFixed(2)}`);
*/