// Um motorista deseja abastecer seu carro com um determinado valor em reais.

// Escreva um programa para ler o preço do litro do álcool e da gasolina e informe se o motorista deve usar um ou outro combustível.

// O cálculo básico para se descobrir se o álcool é vantajoso ou não em relação à gasolina é simples: basta dividir o preço do litro do álcool pelo da gasolina.

// Se o resultado for inferior a 0,7 use álcool. Se for maior ou igual à 0,7 então a gasolina é melhor.

let gasolina = 5.03;
let alcool = 4.81;

alert(`Valores:\n- Gasolina ${gasolina}\n- Álcool ${alcool}`);

let resultado = alcool / gasolina;

if (resultado >= 0.7) {
    alert('É mais vantajoso usar a Gasolina');
} else {
    alert('É mais vantajoso usar o Álcool');
}