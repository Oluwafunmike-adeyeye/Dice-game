var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".jpg";

var randomImageSource1 = "img/" + randomDiceImage1;

var image1 = document.querySelector(".img1");

image1.setAttribute('src', randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".jpg";

var randomImageSource2 = "img/" + randomDiceImage2;

var image2 = document.querySelector(".img2"); 

image2.setAttribute('src', randomImageSource2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🌟 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🌟";
} else {
    document.querySelectorAll("h1").innerHTML = "Draw!";
}