// The user will make their choice and the validity will be determined
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput != 'rock' && userInput != 'paper' && userInput != 'scissors' && userInput != 'bomb') {
        console.log('you must choose again');
        return;
    }
    else if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }
}

// The computer's selection is based off a number that is randomly generated
function getComputerChoice() {
    Math.floor(Math.random() * 3);
    if (Math.floor(Math.random() * 3) === 0) {
        return 'rock';
    } else if (Math.floor(Math.random() * 3) === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// I haven't learned if-else yet, so I went with logical operators
function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'Automatic win for user!';
    }
    if (userChoice === computerChoice) {
        return 'This game ended in a tie';
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer wins!';
    }
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'User wins!';
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'User wins!';
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer wins!';
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer wins!';
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'User wins!';
    }
}

function playGame() {
    var userChoice = getUserChoice('paper');
    var computerChoice = getComputerChoice();
    console.log('user choice is ' + userChoice);
    console.log('computer choice is ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    return;
}

playGame();
