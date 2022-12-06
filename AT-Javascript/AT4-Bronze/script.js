// Crie um programa que solicite ao usuário que digite um número inteiro.

// Valide a entrada de dados e informe se o número digitado é positivo, negativo ou zero.

function validarNumero(){
    let numero = Number(prompt('Digite um número inteiro'))

    if(!(Number.isInteger(numero))){
        alert('[ERRO] Digite um número positivo, negativo ou zero');
        validarNumero()
    }else if(numero > 0){
        alert('O número é positivo')
    }else if(numero < 0){
        alert('O número é negativo')
    }else{
        alert('O número é 0')
    }

}

validarNumero();