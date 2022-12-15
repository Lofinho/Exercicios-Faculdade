// Construa uma tela em HTML para a entrada de dados.
// Construir uma aplicação que gere os números da Megasena.

// Assegure que não vão ser gerados números repetidos.

let megaSena = [];
let vMax = 60;
let divCircles = document.querySelectorAll('.circles')

for (i = 1; i <= 6; i++) {
    let sorteados = Math.ceil(Math.random() * vMax);

    while (megaSena.indexOf(sorteados) >= 0) {
        sorteados = Math.floor(Math.random() * vMax);
    }
    megaSena.push(sorteados);

    console.log(megaSena);
}

megaSena.sort(function(a,b){
  if(a > b) return 1;
  if(a < b) return -1;
  return 0;
})

divCircles.forEach((circles, index) =>{
  circles.textContent = `${megaSena[index]}`;
})