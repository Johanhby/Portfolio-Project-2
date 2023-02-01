
// DOM cache section.

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

//function to generate random number for the computer which translates into a gameplay option selection.

function getComputerChoise() {
    const choises = ["#ro", "#pa", "#sc", "#li", "#sp"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choises[randomNumber];
}

// function to translate gameplay choise to human readable text to inform user of his/her choise vs the computers choise of action.

function convertToWord(letter) {
    if (letter === "#ro") return "Rock";
    if (letter === "#pa") return "Paper";
    if (letter === "#sc") return "Scissors";
    if (letter === "#li") return "Lizard";
    return "Spock";
}

// function to increment the players score by 1 point if victorious in the previous round and add human readable text informing him/her of this.

function win(playerChoise, computerChoise) {
    playerScore++;
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(playerChoise) + " beats " + convertToWord(computerChoise) + ". You win!";
    
}

// function to increment the computers score by 1 point if victorious in the previous round and add human readable text informing him/her of this.

function lose(playerChoise, computerChoise) {
    computerScore++;
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(playerChoise) + " loses to " + convertToWord(computerChoise) + ". You lost..";
}

// function to inform the player that they and the computer chose the same game option and the outcome became a draw, awarding 0 point to either party.

function draw(playerChoise, computerChoise) {
    result_p.innerHTML = convertToWord(playerChoise) + " equals " + convertToWord(computerChoise) + ". It's a draw..";
}

/* Switch statement to determine outcome of the game given the players and computers gameplay choise.
If a match of gameplay choises if found in the first switch block a win is generated for the player.
The second block generates a win for the computer and the third a draw.*/

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

// Eventlistner section reaction to the calling of objects written in the global scope of the DOM cache to perform functions.

function main() {
    rock_button.addEventListener('click', function() {
        game("#ro");
    });

    paper_button.addEventListener('click', function() {
        game("#pa");
    });

    scissors_button.addEventListener('click', function() {
        game("#sc");
    });

    lizard_button.addEventListener('click', function() {
        game("#li");
    });

    spock_button.addEventListener('click', function() {
        game("#sp");
    });
}

main();