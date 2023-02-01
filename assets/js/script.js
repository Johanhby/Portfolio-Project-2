
// DOM cashe section.

let playerScore = 0;
let computerScore = 0;
const playerScore_div = document.getElementById("player-score");
const computerScore_div = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_button = document.querySelector("#ro");
const paper_button = document.querySelector("#pa");
const scissors_button = document.querySelector("#sc");
const lizard_button = document.querySelector("#li");
const spock_button = document.querySelector("#sp");

//function to generate random number for the computer which translates into a play option in the game.

function getComputerChoise() {
    const choises = ["#ro", "#pa", "#sc", "#li", "#sp"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choises[randomNumber];
}



function convertToWord(letter) {
    if (letter === "#ro") return "Rock";
    if (letter === "#pa") return "Paper";
    if (letter === "#sc") return "Scissors";
    if (letter === "#li") return "Lizard";
    return "Spock";
}

function win(playerChoise, computerChoise) {
    playerScore++;
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(playerChoise) + " beats " + convertToWord(computerChoise) + ". You win!"
    
}

function lose(playerChoise, computerChoise) {
    computerScore++;
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(playerChoise) + " loses to " + convertToWord(computerChoise) + ". You lost.."
}

function draw(playerChoise, computerChoise) {
    result_p.innerHTML = convertToWord(playerChoise) + " equals " + convertToWord(computerChoise) + ". It's a draw.."
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
            win(playerChoise, computerChoise);  
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
            lose(playerChoise, computerChoise);
            break;
        case "#ro#ro":
        case "#pa#pa":
        case "#sc#sc":
        case "#li#li":
        case "#sp#sp":
            draw(playerChoise, computerChoise);
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