// Uma fábrica produz vários tipos de doces que são enviados para as lojas em caixas de vários tipos e tamanhos.

// Construa um programa que obtenha a quantidade de doces fabricados e a capacidade da caixa e informe quantas caixas completas vão ser necessárias e se será necessário uma caixa adicional para os doces que restaram.

// Valide todas as entradas de dados.

// let doces = Number(prompt('Digite a quantidade de doces para encomenda'));
// let caixas = Number(prompt('Digite a capacidade das caixas'));

// if (doces % caixas == 0) {
//     caixas = doces / caixas;
//     alert(`Será necessário ${caixas}`);
// } else if (doces % caixas != 0) {
//     caixas = Math.floor(doces / caixas);
//     caixas++;
//     alert(`Será necessário ${caixas}`);
// }

function calcular() {
    let qtd_doces = document.getElementById('qtd_doces').value;
    let qtd_caixas = document.getElementById('qtd-caixas').value;
    let caixas_completas = Math.floor(qtd_doces / qtd_caixas);
    let caixas_restantes = qtd_doces % qtd_caixas;
    let resultado = document.getElementById('resultado')

    console.log(qtd_doces, qtd_caixas, caixas_completas, caixas_restantes);

    if (qtd_doces > 0 && qtd_caixas > 0) {
        caixas_restantes == 0
            ? (resultado.textContent = `Serão necessárias ${caixas_completas} completas`)
            : caixas_restantes != 0
            ? (resultado.textContent = `Serão necessárias: ${caixas_completas} Completas e 1 Caixa adicional com ${caixas_restantes} doces`)
            : '';
    } else {
        resultado.textContent = '[ERRO!] Dados inválidos';
    }
}
