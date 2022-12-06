// Crie um programa que solicite ao usuário que digite um número inteiro, positivo e diferente de zero.

// Valide a entrada de dados e informe se o número digitado é par ou ímpar.

let numero;

function receberNumero() {
    numero = Number(prompt('Digite um número'));

    if (!(Number.isInteger(numero) && numero != 0 && numero > 0)) {
        alert('[ERRO] Digite um número acima de 0');
        receberNumero();
    } else {
        if (numero % 2 == 0) {
            alert(`O número é par`);
        } else {
            alert('O número é impar');
        }
    }
}

receberNumero();

/*
while(!(numero === '' || numero === null)){
    numero = Number(prompt('Digite um número'))

    if(!(Number.isInteger(numero) && numero != 0 && numero > 0)){
        alert('[ERRO] Digite um número acima de 0')
    }else{
        if(numero % 2 == 0){
            alert(`O número é par`)
        }else{
            alert('O número é impar')
        }
    }
}
*/
