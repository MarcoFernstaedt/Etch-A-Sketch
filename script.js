// sets default color
let color = "blue";
// detects clicks in board to stop or start coloring
let click = true;

// generates grid based on user input input: 6 grid = 6 * 6
function generateGrid(size) {
    // assigning .board to variable board
    const board = document.querySelector('.board')
    // assigning div to variable squares
    let squares = board.querySelectorAll('div')
    // romovig any existing div\'s before placing new divs based on input of user
    squares.forEach(div => div.remove())
    // adding grid columns and rows
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    // user input is is assigned to variable amount and multiplying it by itself
    let amount = size * size;
    // for loop that creates the squares in the board
    for (let i = 0; i < amount; i++) {
        // making divs assigned to square variable
        let square = document.createElement('div')
        // adding an eventListener to detect wwhen square should change color
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = "gray";
        // appending squares into board
        board.appendChild(square)
    }
}

// calling function
generateGrid(16)

// takes user input when button is clicked to send to generateGrid function
function gridSize(input) {
    // if statment to make sure grid. is not too small or large
    if (input >= 2 || input <= 100) {
        // gives a message to let user know the size range
        document.querySelector('.error').style.display = "none";
        // function call to generate grid
        generateGrid(input)
    } else {
        // if grid input is less then 2 or greater then 100 this message will be given
        document.querySelector('.error').style.display = "flex";
    }
}

// sets color of squares
function colorSquare() {
    // when clicked color will change when mouse hovers
    if (click) {
        // if color is random we give a random color
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            // if not random we assign the given color
            this.style.backgroundColor = color;
        }
    }
}

// changes color of squares
function changeColor(choice) {
    // reassigns color variable
    color = choice
}

// resets board when button is clicked to clear to default color
function resetBoard() {
    // grabbing board class assiging to variable board
    let board = document.querySelector('.board')
    // grabbing all existing divs and storing in variable squares
    let squares = board.querySelectorAll('div')
    // removing color from each square
    squares.forEach((div) => (div.style.backgroundColor = "gray"))
}

// if boared is clicked the moade message above will allow you to know when you are coloring or not coloring
document.querySelector('.board').addEventListener('click', () => {
    click = !click
    if (click) {
        document.querySelector('.mode').textContent = "Mode: Coloring"
    } else {
        document.querySelector('.mode').textContent = "Mode: Not Coloring"
    }
})