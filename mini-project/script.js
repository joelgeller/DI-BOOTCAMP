function playTheGame() {
  const confirmPlay = confirm("Would you like to play the game?");
  if (!confirmPlay) {
    alert("No problem, Goodbye");
    return;
  }
  
  const userNumber = Number(prompt("Enter a number between 0 and 10"));
  if (isNaN(userNumber)) {
    alert("Sorry Not a number, Goodbye");
    return;
  }
  if (userNumber < 0 || userNumber > 10) {
    alert("Sorry it's not a good number, Goodbye");
    return;
  }

  const computerNumber = Math.round(Math.random() * 10);
  compareNumbers(userNumber, computerNumber);
}

function compareNumbers(userNumber, computerNumber) {
  let chances = 3;
  while (chances > 0) {
    if (userNumber === computerNumber) {
      alert("WINNER!!");
      return;
    } else if (userNumber > computerNumber) {
      alert("Your number is bigger then the computer's, guess again");
      userNumber = Number(prompt("Enter a new number between 0 and 10"));
    } else {
      alert("Your number is smaller then the computer's, guess again");
      userNumber = Number(prompt("Enter a new number between 0 and 10"));
    }   
    chances--;
  }
  alert("out of chances");
}
