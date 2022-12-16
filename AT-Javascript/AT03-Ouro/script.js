// Construa um programa que solicite do usuário o seu peso e a sua altura e mostre o cálculo do seu Índice de Massa Corpórea - IMC.

// IMC = peso (kg) / altura² (m)

// Utilize como referência o site abaixo para criar uma tela que mostre a classificação do IMC, ou seja, "magreza", "normal", "sobrepeso", "obesidade" ou "obesidade grave".

// https://www.programasaudefacil.com.br/calculadora-de-imc

// Valide todas as entradas de dados.

function calcular() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let mensagem = document.getElementById('resultado');
    altura = altura / 100;
    imc = peso / altura ** 2;

    let magreza = document.getElementById('magreza').getElementsByTagName('td');
    let normal = document.getElementById('normal').getElementsByTagName('td');
    let sobrepeso = document
        .getElementById('sobrepeso')
        .getElementsByTagName('td');
    let obesidade = document
        .getElementById('obesidade')
        .getElementsByTagName('td');
    let obesidade_grave = document
        .getElementById('obesidade_grave')
        .getElementsByTagName('td');

    if (peso > 0 && altura > 0) {
        imc < 18.5
            ? (magreza[0].style.background = 'green')
            : imc <= 24.9
            ? (normal[0].style.background = 'green')
            : imc <= 29.9
            ? (sobrepeso[0].style.background = 'green')
            : imc <= 39.9
            ? (obesidade[0].style.background = 'green')
            : (obesidade_grave[0].style.background = 'green');

        mensagem.innerHTML = imc.toFixed(2);
    } else {
        mensagem.innerHTML = '[ERRO], dados inválidos';
    }
}
