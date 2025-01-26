let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    if (userInput.value > randomNumber) {
        gameResult.textContent = "Too high";
        gameResult.style.background = "blue";
    } else if (userInput.value < randomNumber) {
        gameResult.textContent = "Too Low";
        gameResult.style.background = "blue";
    } else {
        gameResult.textContent = "Correct";
        gameResult.style.background = "Green";
    }
}
