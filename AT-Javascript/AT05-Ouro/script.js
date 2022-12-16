// Escreva um programa que simule um caixa eletrônico que receba um valor de saque inteiro e múltiplo de 10 e mostre quantas notas de 100, 50, 20 e 10 ele paga.

// Não considere a quantidade de notas disponíveis no cofre do caixa-eletrônico.
// Valide todas as entradas de dados.

function sacar() {
    let valor = document.getElementById('valor').value;
    let restodiv;
    let resultado = document.getElementById('resultado');
    let retirada = document.getElementById('retirada');
    let notas100 = document.getElementById('n100');
    let notas50 = document.getElementById('n50');
    let notas20 = document.getElementById('n20');
    let notas10 = document.getElementById('n10');

    if (valor % 10 == 0 && valor > 0) {
        n100 = Math.floor(valor / 100);
        restodiv = valor % 100;

        n50 = Math.floor(restodiv / 50);
        restodiv = restodiv % 50;

        n20 = Math.floor(restodiv / 20);
        restodiv = restodiv % 20;

        n10 = Math.floor(restodiv / 10);

        retirada.textContent = 'Foi entregue';
        notas100.textContent = `${n100} notas de 100`;
        notas50.textContent = `${n50} notas de 50`;
        notas20.textContent = `${n20} notas de 20`;
        notas10.textContent = `${n10} notas de 10`;
    } else {
        resultado.innerHTML = 'Valor inválido'
    }
}
