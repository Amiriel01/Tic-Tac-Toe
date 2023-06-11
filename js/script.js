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

//add event listener for each square//
//index points to a number//
squares.forEach((square, index) => {
    square.addEventListener("click", () => {
        //checks to be sure the squares are working when clicked should give a dif number for each square//
        //console.log(index);//
        //call function to place player marker on board//
        playerMarker(index);
    });
});

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
        winner();
    }
}

//function will check the results of the gameboard//
function winner() {
    //this will check rows and columns//
    for (let i = 0; i < 3; i++) {
        let rowSum = gameboard[i][0] + gameboard[i][1] + gameboard[i][2];
        let columnSum = gameboard[0][i] + gameboard[1][i] + gameboard[2][i];
        if (rowSum == 3 || columnSum == 3) {
            message.innerText = "Player One Wins!";
            //console.log("Player One Wins!")
        } else if (rowSum == -3 || columnSum == -3) {
            message.innerText = "Player Two Wins!";
            //console.log("Player Two Wins!")
        }
    }
    //this will check diagonals//
    let diagonalSumOne = gameboard[0][0] + gameboard[1][1] + gameboard[2][2];
    let diagonalSumTwo = gameboard[0][2] + gameboard[1][1] + gameboard[2][0];
    if (diagonalSumOne == 3 || diagonalSumTwo == 3) {
        message.innerText = "Player One Wins!";
        //console.log("Player One Wins!")
    } else if (diagonalSumOne == -3 || diagonalSumTwo == -3) {
        message.innerText = "Player Two Wins!";
        //console.log("Player Two Wins!")
    }
}



//refreshes page to start a new game//
//used JQuery to practice//
$("#restart").click(function () {
    document.location.reload(true);
});

