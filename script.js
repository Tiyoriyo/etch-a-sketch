const divs = document.querySelectorAll('div');
const gridContainer = document.querySelector('#grid-container');
const lineContainerAll = document.getElementsByClassName('.line-container')
const square = document.getElementsByClassName('square');
const clearButton = document.querySelector('#clear');
const blue = document.querySelector('#blue');
const rgb = document.querySelector('#rgb');
const black = document.querySelector('#black');

let colours = ['#ff0000', '#ff9a00', '#d0de21', '#4fde21', '#3fdad8', '#2fc9e2', '#1c7fee', '#5f15f2', '#ba0cf8', '#ba0cf8', '#fb07d9']

let count = 0;

const divSquare = document.createElement('div');
const divLineContainer = document.createElement('div');

createGrid(16);


clearButton.addEventListener('click', newCanvas);

blue.addEventListener('click', () => {
    divs.forEach(() => {
        removeEventListener('mouseover', setRgbClass);
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
        e.target.style.setProperty('background-color', '#0693cf')
    } else {
        return;
    }
}

function getRGB() {
    let colours = ['#ff0000', '#ff9a00', '#d0de21', '#4fde21', '#3fdad8', '#2fc9e2', '#1c7fee', '#5f15f2', '#ba0cf8', '#ba0cf8', '#fb07d9']
    let index; 
    let remainderDiv = colours.length;

    if (count > remainderDiv) {
        index = (count % remainderDiv) - 1;
        count++;
    } else if (count == remainderDiv) {
        index = remainderDiv - 1;
        count++;
    } else if (count < remainderDiv && count >= 0) {
        index = count;
        count++;
    } 

    return colours[index];
}

function setRgbClass(e) {
    if (e.target.id == 'box') {
        e.target.style.setProperty('background-color', getRGB());
    } else {
        return;
    }
}

/*
const colors = {
    red: [255, 0, 0],
    orange: [255, 154, 0],
    yellow: [208, 222, 33],
    green: [79, 222, 33],
    turquoise: [63, 218, 216],
    lightBlue: [47, 201, 226], 
    blue: [28, 127, 238],
    darkBlue: [95, 21, 242],
    purple: [186, 12, 248],
    pink: [251, 7, 217],
}
*/