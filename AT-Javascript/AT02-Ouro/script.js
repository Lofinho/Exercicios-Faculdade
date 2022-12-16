// Construa uma tela em HTML para a entrada de dados.
// As pessoas precisam dedicar, no máximo, 30% da sua renda mensal à moradia, 20% à educação e 15% ao transporte.

// Esses valores são uma referência - não devem ser levados “ao pé da letra”.

// Construa um programa que, dada a renda mensal, gastos com moradia, educação e transporte, faça um diagnóstico da situação.

// O programa deve informar se moradia, educação e trasnporte estão dentro do orçamento recomendado ou não e qual é o percentual atual de cada um.

// Valide todas as entradas de dados.

function calcular() {
    let renda_mensal = document.querySelector('#money').value;
    let moradia = document.querySelector('#moradia').value;
    let educacao = document.querySelector('#educacao').value;
    let transporte = document.querySelector('#transporte').value;

    if(renda_mensal > 0 && moradia > 0 && educacao > 0 && transporte > 0){
        const limite_moradia = 0.3
        const limite_educacao = 0.2
        const limite_transporte = 0.15

        let atual_moradia = moradia / renda_total
        let atual_educacao = educacao / renda_total
        let atual_transporte = transporte / renda_total
    }
}

calcular();
