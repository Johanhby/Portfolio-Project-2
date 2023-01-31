const playerScore = 0;
const computerScore = 0;
const playerScore_div = document.getElementById("player-score");
const computerScore_div = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_button = document.querySelector("#ro");
const paper_button = document.querySelector("#pa");
const scissors_button = document.querySelector("#sc");
const lizard_button = document.querySelector("#li");
const spock_button = document.querySelector("#sp");

function getComputerChoise() {
    const choises = ["#ro", "#pa", "#sc", "#li", "#sp"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choises[randomNumber];
}
console.log(getComputerChoise());

function game(playerChoise) {
    console.log("yes ok  " + playerChoise);
}

function main() {
    rock_button.addEventListener('click', function() {
        game("ro")
    })

    paper_button.addEventListener('click', function() {
        game("pa")
    })

    scissors_button.addEventListener('click', function() {
        game("sc")
    })

    lizard_button.addEventListener('click', function() {
        game("li")
    })

    spock_button.addEventListener('click', function() {
        game("sp")
    })
}

main();