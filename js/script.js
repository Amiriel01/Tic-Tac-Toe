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
let restart = document.querySelector("#restart");
let message = document.querySelector("#message");

//add event listener for each square//
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
    //this will check if the current square is empty before swapping players//
    if (gameboard[row][column] == 0) {
        //this will assign a square to a player click//
        gameboard[row][column] = player;
        //change player to opposite player//
        player *= -1;
        //check to see if gameboard works//
        console.log(gameboard);
    }
}