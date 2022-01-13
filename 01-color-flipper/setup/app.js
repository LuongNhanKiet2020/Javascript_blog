const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    var randomNumber = colors[getRandomNumber()];
    document.body.style.backgroundColor = randomNumber;
    color.innerText = randomNumber;
});

function getRandomNumber() {
    return Math.floor(Math.random * colors.length);
}