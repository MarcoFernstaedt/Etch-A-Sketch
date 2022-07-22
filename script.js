let color = "blue";
let click = true;

function baseBoard(size) {
    const board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach(div => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.cssText = 'background-color: gray;'
        board.insertAdjacentElement('beforeend', square)
    }
}

baseBoard(16);

function changeSize(input) {
    if (input >= 2 || input <= 100) {
        document.querySelector('.error').style.display = "none";
        baseBoard(input)
    } else {
        document.querySelector('.error').style.display = "flex";
    }
}

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice
}

function resetBoard() {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => (div.style.backgroundColor = "gray"))
}

document.querySelector('.board').addEventListener('click', () => {
    click = !click
    if (click) {
        document.querySelector('.mode').textContent = "Mode: Coloring"
    } else {
        document.querySelector('.mode').textContent = "Mode: Not Coloring"
    }
})