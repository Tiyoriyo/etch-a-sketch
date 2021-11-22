const divs = document.querySelectorAll('div');
const gridContainer = document.querySelector('#grid-container');
const lineContainerAll = document.getElementsByClassName('.line-container')
const square = document.getElementsByClassName('square');
const clearButton = document.querySelector('#clear');
const newButton = document.querySelector('#new')
const blue = document.querySelector('#blue');
const rgb = document.querySelector('#rgb');
const black = document.querySelector('#black');
const remove = document.querySelector('#remove')
const buttons = document.querySelectorAll('.left-button');

let count = 0;
let gridCount = 0;

const divSquare = document.createElement('div');
const divLineContainer = document.createElement('div');

createGrid(16);


newButton.addEventListener('click', newCanvas);
clearButton.addEventListener('click', () => {
    clearCanvas();
    createGrid(gridCount);
})

blue.addEventListener('click', () => {
    divs.forEach(() => {
        removeListeners();
        addEventListener('mouseover', paintBlue);
        buttons.forEach(button => {
            button.classList.remove('onUse');
        })
        blue.classList.add('onUse');
    });
});

rgb.addEventListener('click', () => {
    divs.forEach(() => {
        removeListeners();
        addEventListener('mouseover', setRgbClass);
        buttons.forEach(button => {
            button.classList.remove('onUse');
        })
        rgb.classList.add('onUse');
    });
});

black.addEventListener('click', () => {
    divs.forEach(() => {
        removeListeners();
        addEventListener('mouseover', paintBlack);
        buttons.forEach(button => {
            button.classList.remove('onUse');
        });
        black.classList.add('onUse');
    });
});

remove.addEventListener('click', () => {
    divs.forEach(() => {
        removeListeners();
        addEventListener('mouseover', clearPaint);
        buttons.forEach(button => {
            button.classList.remove('onUse');
        })
        remove.classList.add('onUse')
    })
})

function removeListeners() {
    removeEventListener('mouseover', paintBlue);
    removeEventListener('mouseover', setRgbClass);
    removeEventListener('mouseover', paintBlack);
    removeEventListener('mouseover', clearPaint);
}

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

    gridCount = x;
    
}

function paintBlue(e) {
    if (e.target.id == 'box') {
        e.target.style.setProperty('background-color', '#0693cf')
        e.target.style.opacity = 1;
    } else {
        return;
    }
}

function getRGB() {
    let colours = ['#ff0000', '#ff9a00', '#d0de21', '#4fde21', '#3fdad8', '#2fc9e2', '#1c7fee', '#5f15f2', '#ba0cf8', '#fb07d9']
    let index; 
    let remainderDiv = colours.length;

    if (count >= remainderDiv) {
        index = (count % remainderDiv);
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
        e.target.style.opacity = 1;
    } else {
        return;
    }
}

function clearPaint(e) {
    if (e.target.id == 'box') {
        e.target.style.setProperty('background-color', '');
        e.target.style.opacity = '';
    } else {
        return;
    }
}

function paintBlack(e) {    
    if (e.target.id == 'box') {
        if (e.target.style.backgroundColor !== 'black') {
            e.target.style.setProperty('background-color', 'black');
            e.target.style.opacity = 0.33;
        } else {
            e.target.style.opacity = +e.target.style.opacity + 0.10;
        }
    }
}
