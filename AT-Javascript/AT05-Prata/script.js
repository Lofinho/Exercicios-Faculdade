function rolarDados(){

  let imagens = [
      './img/dice_1.gif',
      './img/dice_2.gif',
      './img/dice_3.gif',
      './img/dice_4.gif',
      './img/dice_5.gif',
      './img/dice_6.gif'
  ];
  
  let boxDices = document.querySelector('.hide');
  let textoDices = document.querySelector('.unhide')
  let dice1 = document.querySelector('.dice1')
  let dice2 = document.querySelector('.dice2');

  let aleatorio1 = Math.floor(Math.random() * 6 + 1)
  let aleatorio2 = Math.floor(Math.random() * 6 + 1);

  boxDices.style.opacity = '1'
  textoDices.style.display = 'none'
  dice1.style.background = `url(./img/dice_${aleatorio1}.gif) no-repeat`;
  dice1.style.backgroundSize = 'contain'
  dice2.style.background = `url(./img/dice_${aleatorio2}.gif) no-repeat`;
  dice2.style.backgroundSize = 'contain';
}