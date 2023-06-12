//Create array to hold gameboard data//
let gameboard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

//player variable//
let player = 1;


//Access DOM elements//
let squares = document.querySelectorAll(".square");
let playAgain = document.querySelector("#restart");
let message = document.querySelector("#message");
let firstPage = document.querySelector(".first-page");
let messageAndButton = document.querySelector(".message-button");
let name1 = document.querySelector("#name1");
let name2 = document.querySelector("#name2");
let startGame = document.querySelector("#start-game");


//add event listener for each square//
//index points to a number//
squares.forEach((square, index) => {
    //startGame event listener makes the board unplayable before the start game button is clicked//
    startGame.addEventListener("click", () => {
        if (name1 || name2 === false);
         return document.getElementById("error-message").innerHTML = "**Error: Must Enter Player Names**";
        square.addEventListener("click", () => {
            //checks to be sure the squares are working when clicked should give a dif number for each square//
            //console.log(index);//
            //call function to place player marker on board//
            playerMarker(index);
        });
    });
})

//function to place player markers on board//
function playerMarker(index) {
    //checking again to make sure the numbers are still attached to the squares//
    //console.log(index);//
    //log row and column numbers from the board//
    let column = index % 3
    let row = (index - column) / 3
    //check to see row and column numbers//
    //console.log(gameboard);//
    //this will check if the current square is empty before marker is put and swap players back and forth//
    if (gameboard[row][column] == 0) {
        //this will assign a square to a player click//
        gameboard[row][column] = player;
        //change player to opposite player//
        player *= -1;
        //check to see if gameboard works//
        //console.log(gameboard);//
        //this function calls player marker function to be written on screen//
        writeMarker();
        let winnerResult = winner();
        //not equals null//
        if (winnerResult != null) {
            //put name variable instead of "name1"/"name2"//
            //this will replace all X's with player1 name and all O's with player2 name//
            //.value takes the value from the form to the board//
            message.innerText = winnerResult.replace("X", name1.value).replace("O", name2.value);
            toggleHidden();
        }
    }
}

//player marker function//
function writeMarker() {
    //looks over rows//
    for (let row = 0; row < 3; row++) {
        //defined marker variables//
        //looks over columns//
        for (let column = 0; column < 3; column++)
            if (gameboard[row][column] == 1) {
                //update square with an X by using inverse operations and innerText//
                squares[(row * 3) + column].innerText = "X";
            } else if (gameboard[row][column] == -1) {
                //update square with an O//
                squares[(row * 3) + column].innerText = "O";
            }
        //this function calls winner function to be written on the screen//
    }
}

//function will check the results of the gameboard//
function winner() {
    //this will check rows and columns//
    for (let i = 0; i < 3; i++) {
        let rowSum = gameboard[i][0] + gameboard[i][1] + gameboard[i][2];
        let columnSum = gameboard[0][i] + gameboard[1][i] + gameboard[2][i];
        if (rowSum == 3 || columnSum == 3) {
            //console.log("Player One Wins!")
            return "X Wins!";
        } else if (rowSum == -3 || columnSum == -3) {
            return "O Wins!";
            //console.log("Player Two Wins!")
        }
    }
    //this will check diagonals//
    let diagonalSumOne = gameboard[0][0] + gameboard[1][1] + gameboard[2][2];
    let diagonalSumTwo = gameboard[0][2] + gameboard[1][1] + gameboard[2][0];
    let positiveSum = 0;
    let negativeSum = 0;
    gameboard.forEach(row => {
        row.forEach(column => {
            if (column > 0) {
                positiveSum++;
            } else if (column < 0) {
                negativeSum++;
            }
        })
    });
    //console.log(positiveSum, negativeSum);

    if (diagonalSumOne == 3 || diagonalSumTwo == 3) {
        //console.log("Player One Wins!")
        return "X Wins!";
    } else if (diagonalSumOne == -3 || diagonalSumTwo == -3) {
        //console.log("Player Two Wins!")
        return "O Wins!";
        //It is not printing tie message???"
    } else if (positiveSum === 5 && negativeSum === 4) {
        return "It's a Tie!";
    }
}

//css set .hidden//
//hidden is toggling back and forth each time a square is clicked but never showing the message or play again button????//
function toggleHidden() {
    //message.classList.toggle("hidden");
    //playAgain.classList.toggle("hidden");
    messageAndButton.classList.toggle("hidden");
    firstPage.classList.toggle("hidden");
}

//refreshes page to start a new game//
//used JQuery to practice//
$("#restart").click(function () {
    document.location.reload(true);
});

