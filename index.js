
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //elige entre 1 y 6

var numberDice1 = "dice" + randomNumber1 + ".png"; //dice1.png hasta dice6.png

var randomImage1 = "images/" + numberDice1; // variable para mostrar la imagen del dado

document.getElementsByClassName("img1")[0].setAttribute("src", randomImage1); //method para CAMBIAR la imagen


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var numberDice2 = "dice" + randomNumber2 + ".png";

var randomImage2 = "images/" + numberDice2;

document.getElementsByClassName("img2")[0].setAttribute("src", randomImage2);

//loop para mostrar el H1

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "😎Player 1 wins!!!";
}

else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "😎Player 2 wins!!!";
}

else {
  document.querySelector("h1").innerHTML = "😝Draw!!!😝";
}
