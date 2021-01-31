var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var newImg1 = 'images/dice' + randomNumber1 + '.png';
document.querySelector(".img1").setAttribute('src', newImg1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var newImg2 = 'images/dice' + randomNumber2 + '.png';
document.querySelector(".img2").setAttribute('src', newImg2);

var text;
if (randomNumber1 > randomNumber2) {
  text = 'Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
  text = 'Player 2 Wins!';
} else {
  text = 'Draw!';
}

document.querySelector("h1").innerHTML = text;
