function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

game();


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            console.log("Draw! you are both Rock")
        }
        else if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock");
        }
        else {
            console.log("You Win! Rock beats Paper");
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock")
        }
        else if (computerSelection == "Paper") {
            console.log("Draw! You are both Paper")
        }
        else {
            console.log("You Lose! Scissors beats Paper")
        }
    }
    else {
        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors");
        }
        else if (computerSelection == "Paper") {
            console.log("You Win! Scissors beats Paper");
        }
        else {
            console.log("Draw! You are both Scissors")
        }
    }
  }

  function capitalizeFirstLetter (input) {
      return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  }

  function game() {
      for (let i = 0; i < 5; i++) {
        let x = computerPlay();
        let input = prompt("Please enter your selection! ");
        
        console.log("Computer: " + x);
        console.log("You: " + capitalizeFirstLetter(input));
        playRound(capitalizeFirstLetter(input), x);

      }
  }