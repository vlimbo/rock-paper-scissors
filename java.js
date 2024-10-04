// Create a variable and get user input and ask for 'rock paper of scissor'
let userInput = "";
// Create a variable that stores the computer choice.
let computerChoice = "";
// Create two variables that keeps track of the score between human and computer
let scoreHuman = 0;
let scoreMachine = 0;
let scoreTie = 0;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    userInput = prompt("Rock, paper or scissors?");
    computerChoice = getComputerChoice();
    playRound(userInput, computerChoice);
    console.log(
      `Wins: ${scoreHuman}, Loses: ${scoreMachine}, Ties: ${scoreTie}`
    );
  }
  if (scoreHuman > scoreMachine) {
    console.log("You won the game!");
  } else if (scoreHuman < scoreMachine) {
    console.log("You lost the game!");
  } else {
    console.log("You fought hard, but it is a tie!");
  }
}

// Create a function that evaluates both userInput and Computer choice to evaluate the result
function playRound(userInput, computerChoice) {
  // Check if userInput is equal to computerChoice
  if (userInput === computerChoice) {
    // If this is the case console.log tie
    console.log(`You chose ${userInput} computer chose ${computerChoice} Tie!`);
    scoreTie++;
  }
  // Check if userInput is rock
  else if (userInput.toLowerCase() === "rock") {
    // Check if computer choice is equal to paper
    if (computerChoice === "paper") {
      // If computer choses paper console.log 'You lose'
      console.log(
        `You chose ${userInput} and computer chose ${computerChoice} you lose!`
      );
      scoreMachine++;
    } else {
      // Create condition for when computer chooses scissors
      // If compuer choosese scissors human win
      console.log(
        `You chose ${userInput}, comuter chose ${computerChoice} You win!`
      );
      scoreHuman++;
    }
  } else if (userInput.toLowerCase() === "paper") {
    // Check if user input equals paper
    if (computerChoice === "rock") {
      // Check if computer chooses rock
      console.log(
        `You chose ${userInput}, computer chose ${computerChoice}. You win!`
      ); // print You win! to the console
      scoreHuman++;
    } else {
      console.log(
        `You chose ${userInput}, computer chose ${computerChoice}. You lose!`
      ); // print You lose! to the console
      scoreMachine++;
    }
  } else if (userInput.toLowerCase() === "scissors") {
    // Check if user choose scissor
    if (computerChoice === "rock") {
      // Check if computer choses rock
      console.log(
        `You chose ${userInput}, computer chose ${computerChoice}. You lose!`
      ); // if computer chose rock print You lose! to the console
      scoreMachine++;
    } else {
      console.log(
        `You chose ${userInput}, computer chose ${computerChoice}. You win!`
      ); // print you win to the console
      scoreHuman++;
    }
  }
}

// Create a function for computer guess
function getComputerChoice() {
  // Create variable that generates a random number between 0 and 1
  const randomNumber = Math.random();

  // Create an if statement that checks werther the number is less than or equal to 0.3
  if (randomNumber <= 3) {
    // Return Rock
    return "rock";
  }
  // Create an if statement that checks if randomNumber is less than or equal to 0.6
  else if (randomNumber <= 0.6) {
    // Return Paper
    return "paper";
  }
  // Create an if statement that checks if random number is less than 1
  else if (randomNumber < 1) {
    // Return the value scissors
    return "scissors";
  }
}
