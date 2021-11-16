const divs = document.querySelectorAll('div');
const container = document.querySelector('.grid-container');
const divSquare = document.createElement('div');
const divLineContainer = document.createElement('div');

function createDivSquare() {
    divSquare.classList.add('square')
    return;
}

function createDivContainer(width) {
    divLineContainer.classList.add('line-container');
    container.appendChild(divLineContainer);

    createDivSquare();
    divLineContainer.appendChild(divSquare);

    for (i = 0; i < width-1; i++) {
        divLineContainer.appendChild(divSquare.cloneNode(true));
    }
}


function createGrid(width) {
    createDivContainer(width);
    container.appendChild(divLineContainer);

    for (i = 0; i < width-1; i++) {
        container.appendChild(divLineContainer.cloneNode(true));
    }
}

/*
function paintRed(e) {
    e.stopPropagation();
    e.classList.add('red');
}

divs.forEach(div => {
    addEventListener('mouseover', paintRed);
});
*/