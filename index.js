
var randomNumber1 = Math.random();
randomNumber1 = 1 + Math.floor( randomNumber1 * 6);
var randomNumber2 = Math.random();
randomNumber2 = 1 + Math.floor(randomNumber2 * 6);
if (randomNumber1> randomNumber2) {
    document.getElementById("win").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2)
{
    document.getElementById("win").innerHTML = "Player 2 Wins! 🚩";
}
else 
{
    document.getElementById("win").innerHTML =  "Draw!";
}

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");


document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");