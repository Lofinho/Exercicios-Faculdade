// Criar um programa que obtenha dois números inteiros diferentes, valide se a entrada está correta e informe qual dos dois é o maior.

/*
function recebeN1() {
    let n1 = Number(prompt('Digite o primeiro número'));

    if(!(Number.isInteger(n1))){
        alert('Não digite letras')
        recebeN1();
    }
}

function recebeN2(){
    let n2 = Number(prompt('Digite o segundo número'));
    if (!Number.isInteger(n2)) {
        alert('Não digite letras');
        recebeN2();
    }else if(n2 == n1){
        alert('Escreva um número diferente')
        recebeN2()
    }
    
}

function verificarMaiorMenor(n1, n2) {
    if (n1 > n2) {
        alert(`O número ${n1} é maior`);
    }else if(n1 < n2) {
        alert(`O número ${n2} é maior`);
    }
}

recebeN1()
recebeN2();
verificarMaiorMenor(n1, n2);
*/

let n1, n2;

do {
    n1 = Number(prompt('Digite o primeiro número'));
} while (!Number.isInteger(n1));

do {
    n2 = Number(prompt('Digite o segundo número'));
    if (n1 == n2) {
        alert('Digite um número diferente');
    }
} while (!Number.isInteger(n1) || n1 == n2);

n1 > n2 ? alert(`O número ${n1} é maior`) : alert(`O número ${n2} é maior`);