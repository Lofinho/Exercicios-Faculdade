// Um motorista deseja abastecer seu carro com um determinado valor em reais.

// Escreva um programa para ler o preço do litro do combustível e o valor que o motorista deseja gastar e informe quantos litros foram colocados no tanque.

// Não se preocupe com a capacidade do tanque de combustível.

let gasolina = 5.03;
let alcool = 4.81;
let litros

alert(`Valores:\n- Gasolina ${gasolina}\n- Álcool ${alcool}`);

do {
    escolha = Number(prompt('Digite 1 para GASOLINA ou 2 para ÁLCCOL'));
} while (escolha != 1 && escolha != 2);

function abastercer() {
    do{
        recebeValor = Number(prompt('Digite o valor a ser abastecido'));
    }while(!(recebeValor >= 0))

    if (!(recebeValor >= 0) || isNaN(recebeValor)) {
        alert('Digite um valor');
    } else if (escolha === 1) {
        litros = recebeValor / gasolina;
        alert(`Foi adicionado ${(litros.toFixed(1))} de Gasolina no veículo`);
    } else {
        litros = recebeValor / alcool;
        alert(`Foi adicionado ${(litros.toFixed(1))} de Álcool no veículo`);
    }
}

abastercer();
