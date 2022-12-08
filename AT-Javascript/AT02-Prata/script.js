// Crie um programa que obtenha o valor de uma conta de restaurante, a quantidade de pessoas na mesa e informe o total a ser pago (conta + gorjeta) e o valor por pessoa.

// A gorjeta é calculada como 10% do valor da conta (valor fixo).

// Valide todas as entradas de dados.

let conta, rachar, gorjeta;

do {
    conta = Number(prompt('Digite o valor da conta'));
} while (!(conta > 0));

do {
    rachar = Number(prompt('Quantidade de pessoas a mesa'));
} while (!(Number.isInteger(rachar) && rachar > 0));

gorjeta = conta * (10 / 100);
novaConta = conta + gorjeta;

rachar = novaConta / rachar;

alert(
    `Foi adicionado a taxa de serviço\n${conta} + ${gorjeta}\nNovo valor: ${novaConta} reais`
);
alert(`O valor da conta por pessoa ficou de: ${rachar.toFixed(2)} reais cada`);