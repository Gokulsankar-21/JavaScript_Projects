// interactive design

const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');
const statusTxt = document.querySelector('#status');
const btnRestart = document.querySelector('#restart');

console.log(boxes, statusTxt, btnRestart);

const x = '<img src="../images/x.png" class="player-animation">'
const o = '<img src="../images/o.png" class="player-animation">'
console.log(x, o);

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; // 8 possibility

let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let currentPlayerElement = x;
let running = false; // game not started

console.log(currentPlayerElement);

// Initialize Game
init();

function init() {
    boxes.forEach(box => {
        box.addEventListener('click', boxClick);
    });
    btnRestart.addEventListener('click', restartGame);
    running = true; // game starts
    statusTxt.textContent = `${currentPlayer} Your Turn`;
}

// If box clicked
function boxClick() {
    console.log('click');
    console.dir(this);

    const index = this.dataset.index;
    console.log(index);

    // if we are already clicked  then return 
    if (!running) {
        console.log("Game finish or Draw");
        return; // return 0 - below code not executed
    }
    else if (options[index] != '') {
        console.log("Your already clicked");
        return;
    }
    else {
        updateBox(this, index);
        checkWinner();
    }
}

// Update the box and option array
function updateBox(box, index) {
    box.innerHTML = currentPlayerElement;
    options[index] = currentPlayer;   // stored in option array
    console.log("Updated", options);

}

// whole process happen in every single click
function checkWinner() {
    let isWon = false;

    for (let i = 0; i < win.length; i++) {
        const condition = win[i];
        // console.log(condition);

        let box1 = options[condition[0]];
        let box2 = options[condition[1]];
        let box3 = options[condition[2]];
        console.log(box1, box2, box3);

        // if any values are availbale then move to next if no then next iteration
        // if any box contains '' then possibility isn't matched
        if (box1 == '' || box2 == '' || box3 == '') {
            continue; // next iteration
        }

        // no matter R->L and L->R => always check overall
        if (box1 == box2 && box2 == box3) {
            isWon = true;

            boxes[condition[0]].classList.add('win');
            boxes[condition[1]].classList.add('win');
            boxes[condition[2]].classList.add('win');
            break;
        }
    }


    if (isWon) {     // if currentPlayer Won
        statusTxt.textContent = `${currentPlayer} is Won !`;
        running = false;

        showWinner();
    }
    else if (!options.includes('')) {  // if game draw
        statusTxt.textContent = `Game Draw !`;
        running = false;

        showDraw();
    }
    else {     // change player turn - game is still running
        changePlayer();
    }
}


// changing current player
function changePlayer() {
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    currentPlayerElement = (currentPlayerElement == x) ? o : x;
    statusTxt.textContent = `${currentPlayer} Your Turn`;
}

// restart game
function restartGame() {
    options = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    currentPlayerElement = x;
    running = true;
    statusTxt.textContent = `${currentPlayer} Your Turn`;

    boxes.forEach(box => {
        box.innerHTML = ''
        box.classList.remove('win');
    });

    console.log('Restarted');
    container.classList.remove('move');
    statusTxt.classList.remove('show-winner');
    statusTxt.classList.remove('show-draw');
}

function showWinner() {
    container.classList.add('move');
    statusTxt.classList.add('show-winner');
}

function showDraw() {
    container.classList.add('move');
    statusTxt.classList.add('show-draw');
}

// try 4x4 grid
// done