// Construa um programa que determine, dada uma idade, se uma pessoa brasileira:

// É obrigada a votar (maiores de 18 até 70 anos).
// Tem voto eletivo (de 16 anos em diante até 18 anos e maiores de 70 anos).
// Não pode votar (menores de 16 anos).
// Valide a entrada de dados: a idade deve ser um número inteiro e positivo. Não se preocupe com a idade máxima.

let nacionalidade, idade

do{
  nacionalidade = Number(prompt('Você é Brasileiro ?\nDigite 1 para SIM\nDigite 2 para NÃO'))
}while(nacionalidade != 1 && nacionalidade != 2)

nacionalidade == 1 ? {
  
} : alert('Você não precisa votar')