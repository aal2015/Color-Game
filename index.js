let squares = document.getElementsByClassName("square");
let reset = document.getElementById("reset");
let message = document.getElementById("message")
let easyButton = document.getElementById("easy")
let hardButton = document.getElementById("hard");
let correctColor = ""; 
let mode = "hard";
let numOfSquares = 6;

function getRandNumRGB() {
    return Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
}

function getRandColor() {
    return "rgb(" + getRandNumRGB().toString() + ", " + getRandNumRGB().toString() + ", " + getRandNumRGB().toString() + ")";
}

function squareSetUp() {
    // Assigning colors and event listers to each of boxes
    for (let i = 0; i < squares.length; i++) {
        if (mode == "easy" && i > 2) {
            squares[i].style.backgroundColor = "#232323";
        } else {
        squares[i].style.backgroundColor = getRandColor();
        }
        squares[i].addEventListener("click", function() {
            console.log(this.style.backgroundColor);
            checkSelection(this);
        });
    }
}

function pickColor() {
    index = Math.floor(Math.random() * (numOfSquares - 1 - 0 + 1) ) + 0;
    console.log(index, numOfSquares);
    correctColor = squares[index].style.backgroundColor; 
}

function setTitle() {
    h1_element = document.querySelector("h1");
    h1_element.innerText = correctColor;
}

function setMode()  {
    if (mode == "hard") {
        hardButton.classList.add("selected");
        easyButton.classList.remove("selected");
    } else if (mode == "easy") {
        hardButton.classList.remove("selected");
        easyButton.classList.add("selected");
    }
    // apply class 'selected' to the button accordingly
}

function changeMode() {
    setMode();
    squareSetUp();
    pickColor();
    setTitle();
}

function checkSelection(selectedSquare) {
    if (correctColor == selectedSquare.style.backgroundColor) {
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = correctColor;   
        }
        reset.innerText = "Play Again?"
        message.innerText = "Correct!";
    } else {
        selectedSquare.style.backgroundColor = "#232323";
        message.innerText = "Try Again!";
    }
}

function init () {
    setMode();
    squareSetUp();    
    pickColor();
    setTitle();

    reset.addEventListener("click", function() { 
        changeMode(); 
        message.innerText = "";
        reset.innerText = "New Colors";
    });

    easyButton.addEventListener("click", function() {
        if (mode == "hard") {
            mode = "easy";
            numOfSquares = 3;
            changeMode();
        }
        
    });
    hardButton.addEventListener("click", function() {
        if (mode == "easy"){
            mode = "hard";
            numOfSquares = 6;
            changeMode();
        }
    });
}

init();