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

function game(playerChoise) {
    const computerChoise = getComputerChoise();
    switch (playerChoise + computerChoise) {
        case "#ro#sc":
        case "#ro#li":
        case "#pa#ro":
        case "#pa#sp":
        case "#sc#pa":
        case "#sc#li":
        case "#li#pa":
        case "#li#sp":
        case "#sp#sc":
        case "#sp#ro":
            console.log("Player Wins!");  
            break;
        case "#ro#pa":
        case "#ro#sp":
        case "#pa#li":
        case "#pa#sc":
        case "#sc#ro":
        case "#sc#sp":
        case "#li#sc":
        case "#li#ro":
        case "#sp#pa":
        case "#sp#li":
            console.log("Player loses!");
            break;
        case "#ro#ro":
        case "#pa#pa":
        case "#sc#sc":
        case "#li#li":
        case "#sp#sp":
            console.log("It's a draw!")
            break;                            
    }
}

function main() {
    rock_button.addEventListener('click', function() {
        game("#ro")
    })

    paper_button.addEventListener('click', function() {
        game("#pa")
    })

    scissors_button.addEventListener('click', function() {
        game("#sc")
    })

    lizard_button.addEventListener('click', function() {
        game("#li")
    })

    spock_button.addEventListener('click', function() {
        game("#sp")
    })
}

main();