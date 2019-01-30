const rollButton = document.querySelector(".dice__trigger")
const diceImage = document.querySelector(".dice__image")

function randomDie() {
    return Math.floor(Math.random() * 6) + 1
}

function rollDie() {
    rollButton.addEventListener("click", function() {diceImage.src = `images/dice${randomDie()}.png`})
}

rollDie();