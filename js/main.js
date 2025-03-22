// Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.
const gridOne = document.getElementById('gOne')
const gridTwo = document.getElementById('gTwo')
const gridThree = document.getElementById('gThree')
const gridFour = document.getElementById('gFour')
const gridFive = document.getElementById('gFive')
const gridSix = document.getElementById('gSix')
const gridSeven = document.getElementById('gSeven')
const gridEight = document.getElementById('gEight')
const gridNine = document.getElementById('gNine')
const rowOne = document.getElementsByClassName('r1')
let isO = false


function checkForWin() {
    if (gridOne.innerHTML === "X" && gridTwo.innerHTML === "X" && gridThree.innerHTML === "X") {
        console.log("X wins")
    }
        
}
gridOne.addEventListener('click', () => {
    if (isO === false) {
        gridOne.innerHTML = "X"
    } else {
        gridOne.innerHTML = "O"
    }
    isO = !isO
    checkForWin()
})
gridTwo.addEventListener('click', () => {
    if (isO === false) {
        gridTwo.innerHTML = "X"
    } else {
        gridTwo.innerHTML = "O"
    }
    isO = !isO
})
gridThree.addEventListener('click', () => {
    if (isO === false) {
        gridThree.innerHTML = "X"
    } else {
        gridThree.innerHTML = "O"
    }
    isO = !isO
})
gridFour.addEventListener('click', () => {
    if (isO === false) {
        gridFour.innerHTML = "X"
    } else {
        gridFour.innerHTML = "O"
    }
    isO = !isO
})
gridFive.addEventListener('click', () => {
        if (isO === false) {
        gridFive.innerHTML = "X"
    } else {
        gridFive.innerHTML = "O"
    }
    isO = !isO
})
gridSix.addEventListener('click', () => {
        if (isO === false) {
        gridSix.innerHTML = "X"
    } else {
        gridSix.innerHTML = "O"
    }
    isO = !isO
})
gridSeven.addEventListener('click', () => {
        if (isO === false) {
        gridSeven.innerHTML = "X"
    } else {
        gridSeven.innerHTML = "O"
    }
    isO = !isO
})
gridEight.addEventListener('click', () => {
        if (isO === false) {
        gridEight.innerHTML = "X"
    } else {
        gridEight.innerHTML = "O"
    }
    isO = !isO
})
gridNine.addEventListener('click', () => {
        if (isO === false) {
        gridNine.innerHTML = "X"
    } else {
        gridNine.innerHTML = "O"
    }
    isO = !isO
})


//first click id always an x sencond is O ect.

//first player will click on a box in a grid of 9

//box selected will display an x 

//second play will click a box / box will display on O

// when there are 3 matching symbols in a row game ends and winner is displayed bellow 

// winning symbol gets 1 point added to score

//Player can click reset button to reset board and restart game.




// grid is object: 

// if  "O is false display x " else display O