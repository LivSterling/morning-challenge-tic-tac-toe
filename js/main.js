// Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.
const grid = {
gridOne: document.getElementById('gOne'),
gridTwo: document.getElementById('gTwo'),
gridThree: document.getElementById('gThree'),
gridFour: document.getElementById('gFour'),
gridFive: document.getElementById('gFive'),
gridSix: document.getElementById('gSix'),
gridSeven: document.getElementById('gSeven'),
gridEight: document.getElementById('gEight'),
gridNine: document.getElementById('gNine'),
}
// const rowOne = document.getElementsByClassName('r1')
let isO = false


const winLines = {
    rowOne: document.getElementsByClassName('r1'),
    rowTwo: document.getElementsByClassName('r2'),
    rowThree: document.getElementsByClassName('r3'),
    columnOne: document.getElementsByClassName('c1'),
    columnTwo: document.getElementsByClassName('c2'),
    columnThree: document.getElementsByClassName('c3'),
    diagonalOne: document.getElementsByClassName('d1'),
    diagonalTwo: document.getElementsByClassName('d2')
}

// function checkForWin() {
//     if (gridOne.innerHTML === "X" && gridTwo.innerHTML === "X" && gridThree.innerHTML === "X" || grid) {
//         console.log("X wins")
//     }
        
// }

function checkForWin(className) {
    const elements = className;

    const firstInnerHTML = elements[0].innerHTML;
    for (let i = 1; i < elements.length; i++) {
      if (elements[i].innerHTML !== firstInnerHTML) {
        return false;
      } 
    } if (firstInnerHTML === 'X') {
        console.log("X wins")
    } else {
        console.log("O wins")
    }

  }

grid.gridOne.addEventListener('click', () => {
    if (isO === false) {
        gridOne.innerHTML = "X"
    } else {
        gridOne.innerHTML = "O"
    }
    isO = !isO
    checkForWin(winLines.rowOne )
    checkForWin(winLines.columnTwo)
    checkForWin(winLines.diagonalOne)
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