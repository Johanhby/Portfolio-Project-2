# Rock Paper Scissors Lizard Spock

Rock, Paper, Scissors, Lizard & Spock is a game of chance played in good fun with one player playing against the computer.

## User stories

- End user goal: The user is looking for a fun pass time activity.
- End business goal: Increase website traffic and earn more add revenue.
- Acceptance criteria: A game of fair chance and available score keeping for bragging rights.
- Measurement of success: Amount of visitors, new visitors, recurring visitors, total ads played /hour /day /week etc.

## Features

- A descriptive Hero image.
- An encouraging message to start playing.
- Decorative opposing hands at the ready, setting the competivite mood.
- 5 button choises to play the game.
- A scoreboard summing up amount of wins for the player and computer.

### Existing Features

- A pentagon shaped Hero image which explains the actions and their potential outcome greets the user upon visiting the website.

![Screenshot](/assets/images/Hero-image-readme.jpg)

- There is a message encurraging the player to bush a button to begin the game. That message will change to display the outcome of each round of the game in text form.
- Two hands "at the ready" are displayed. One is representing the player and the other the computer, setting a competitive mood.

![Screenshot](/assets/images/message-readme.jpg)

- Five clickable buttons, each with a picture of the different game choises are present in the middle of the page. Each button will have a click animation performed upon click, letting the player know they made a choise.
- Finally a scoreboard is present beneith the game buttons, tallying the score of the player versus the computer. Each round awards the winner with 1 point, the loser of 0 and a draw will award no points to either side.

![Screenshot](/assets/images/buttons-score-readme.jpg)

### Features to implement

- Account creation feature and an all time scoreboard featuring the luckiest players in games of 100 rounds.

### Technologies

5 game options exists in the form of buttons. Each choise has 2 winning scenarios, 2 losing scenarios and 1 draw. Which option will win/lose to which is covered in the Hero Image of the website but I will document it here aswell:
- Rock:  
  - Wins against: Scissors/Lizard
  - Loses to: Paper/Spock
- Paper:
  - Wins against: Rock/Spock
  - Loses to: Scissors/Lizard
- Scissors:
  - Wins against: Paper/Lizard
  - Loses to: Rock/Spock
- Lizard:
  - Wins against: Spock/Paper
  - Loses to: Scissors/Rock
- Spock:
  - Wins against: Scissors/Rock
  - Loses to: Paper/Lizard
- Draw: If the player and the computer chooses the same option it's a draw, awarding no points to either party.         


### Credits

- I thank the Youtube Channel "FreeCodeCamp.org" for it's well laid out video on Javascript pertaining to "Rock, Paper & Scissors", I learned alot watching your content.
- Link: https://www.youtube.com/watch?v=jaVNP3nIAv0

### Code Validation

- W3C HTML Validator Passed

- W3C CSS Validator Passed (with minor insignificant errors)

- JSHint Javascript Validator passed (with 2 minor insignificant errors)

### Bugfixes
- The switch statement "function game" in Javascript was initially missing the break; statements between each switch block to stop the execution of further code when an outcome had already been determined.

### Supported Devices

- The site was built from a "Mobile first" perspective. Design was made from a 285 pixel width and scaling up to any size device from there, accomodating even small smartphone sizes.

### Deployment

- Go to github.com, log in to your account and select the repository you want to deploy. Click on settings and scroll down to Gibhub Pages and select "main" as a source option. Once that is done you click "save" and the site will go live, it might take a few minutes for that to happen but it should.