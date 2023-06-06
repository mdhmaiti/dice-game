let randomNumber1 = Math.floor(Math.random()*6 ) +1 ; // 1 to 6
let randomDiceImages = "dice" + randomNumber1 + ".png"; // it gets the random images.
let randomImageSource1 = "images/" + randomDiceImages;
let image1 = document.querySelectorAll("img")[0];// we are selecting the first image tag
image1.setAttribute("src",randomImageSource1);
//-----------------------------now we can get the random image of the dice 2.
let randomNumber2 = Math.floor(Math.random()*6)+1; // 1 to 6
let randomImageSource2 = "images/dice" +randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);
//-------------------------------------- now it is time for the conclution 
if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "player 1 wins 👌";
}
 else if (randomNumber1 < randomNumber2){
document.querySelector("h1").innerHTML="player 2 wins 💥";
 }
 else {
document.querySelector("h1").innerHTML = "it is a draw 🐱‍🐉";
}
