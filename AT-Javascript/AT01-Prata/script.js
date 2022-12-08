// Construa um programa que solicite do usuário o seu peso e a sua altura e mostre o cálculo do seu Índice de Massa Corpórea - IMC.

// IMC = peso (kg) / altura² (m)

// Valide todas as entradas de dados.

let imc, peso, altura

do{
  peso = Number(prompt('Digite seu peso (KG)'))
}while(!(peso > 0))

do{
  altura = Number(prompt('Digite sua altura (CM)'))
}while(!(altura > 0))

altura /= 100

imc = peso / altura**2
alert(`Seu IMC é de ${imc.toFixed(2)}`);