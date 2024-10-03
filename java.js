// Create a variable and get user input and ask for 'rock paper of scissor'
const userInput = prompt("Rock, paper or scissors?");
// Create a variable that stores the computer choice.
const computerChoice = getComputerChoice();

// Check if userInput is equal to computerChoice
if (userInput === computerChoice) {
  // If this is the case console.log tie
  console.log("Tie");
}
// Check if userInput is rock
else if (userInput.toLowerCase() === "rock") {
  // Check if computer choice is equal to paper
  if (computerChoice === "paper") {
    // If computer choses paper console.log 'You lose'
    console.log("You lose");
  } else {
    // Create condition for when computer chooses scissors
    // If compuer choosese scissors human win
    console.log("You win!");
  }
} else if (userInput.toLowerCase() === "paper") {
  // Check if user input equals paper
  if (computerChoice === "rock") {
    // Check if computer chooses rock
    console.log("You win!"); // print You win! to the console
  } else {
    console.log("You lose!"); // print You lose! to the console
  }
} else if (userInput.toLowerCase() === "scissor") {
  // Check if user choose scissor
  if (computerChoice === "rock") {
    // Check if computer choses rock
    console.log("You lose!"); // if computer chose rock print You lose! to the console
  } else {
    console.log("You win!"); // print you win to the console
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
