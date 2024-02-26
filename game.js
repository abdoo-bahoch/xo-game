let turn = "X";
let squares  = [];

// Set the initial player turn message
playturn = document.getElementById('div0');

// Function to apply winning style
function style(x, y, z) {
  document.getElementById('div' + x).style.backgroundColor = "red";
  document.getElementById('div' + y).style.backgroundColor = "red";
  document.getElementById('div' + z).style.backgroundColor = "red";

  playturn.innerHTML = `${squares[x]} winner ` ;
  setInterval(function() {playturn.innerHTML +="."},1000)
  setTimeout(() => location.reload(), 4000);
}

// Function to check for a winner
function win() {
  // Check for all winning combinations
  if (squares[1] === squares[2] && squares[2] === squares[3] && squares[1] !== '') {
    console.log("you won");
    style(1, 2, 3);

  } else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[4] !== '') {
    console.log("you won");
    style(4, 5, 6);
  } else if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] !== '') {
    console.log("you won");
    style(7, 8, 9);
  } else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] !== '') {
    console.log("you won");
    style(1, 4, 7);
  } else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !== '') {
    console.log("you won");
    style(2, 5, 8);
  } else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[3] !== '') {
    console.log("you won");
    style(3, 6, 9);
  } else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[1] !== '') {
    console.log("you won");
    style(1, 5, 9);
  } else if (squares[3] === squares[5] && squares[5] === squares[7] && squares[3] !== '') {
    console.log("you won");
    style(3, 5, 7);
  }
}

// Function to handle player's turn
function play(id) {
  let play1 = document.getElementById(id);

  // Add content class to clicked div
  play1.classList.add('content');

    if (turn === "X" && play1.innerHTML === "") {
    play1.innerHTML = "X";
    turn = "O";
    playturn.innerHTML = "O turn";
  }
  else {
    play1.innerHTML = "O";
    turn = "X";
    playturn.innerHTML = "X turn";
  }

  // Store innerHTML of each square for win checking
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById('div' + i).innerHTML;
  }

  // Check for a win after each move
  win();
}
