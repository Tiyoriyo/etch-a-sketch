const divs = document.querySelectorAll('div');
const gridContainer = document.querySelector('#grid-container');
const lineContainerAll = document.getElementsByClassName('.line-container')
const square = document.getElementsByClassName('square');
const clearButton = document.querySelector('#clear');
const blue = document.querySelector('#blue');
const rgb = document.querySelector('#rgb');
const black = document.querySelector('#black');

const divSquare = document.createElement('div');
const divLineContainer = document.createElement('div');

createGrid(16);


clearButton.addEventListener('click', newCanvas);

blue.addEventListener('click', () => {
    divs.forEach(() => {
        addEventListener('mouseover', paintBlue);
    });
});

function clearCanvas() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function newCanvas() {
    const x = prompt('How many squares do you want per side?', 16);
    if (x == null) {
        return
    } else if (x > 100 || x < 1 || x == NaN) {
        alert('You must pick a number from 1 to 100.');
        return newCanvas();
    } else {
        clearCanvas();
        createGrid(x);
    }
}

function createDivSquare() {
    divSquare.classList.add('square');
    return;
}

function createGrid(x) {
    let totalBox = x ** 2;
    let boxWidth = 500 / x;
    
    for (i = 0; i < totalBox; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'box');
        div.style.setProperty('width', boxWidth + "px");
        gridContainer.appendChild(div);
    }
}

function paintBlue(e) {
    if (e.target.id == 'box') {
        e.target.classList.add('blue');
    } else {
        return;
    }
}
