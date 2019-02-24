document.addEventListener('DOMContentLoaded', function() {
    createGrid(16)
})

const etchDiv = document.getElementById('etch')
etchDiv.addEventListener('mouseover', etchADiv)

function createGrid(gridSize) {
    for (i = 0; i < Math.pow(gridSize,2); i++) {
        let gridDiv = document.createElement('div')
        document.getElementById('etch').appendChild(gridDiv)
    }
}

function etchADiv(e) {
    e.target.classList.add('etched')
}

function reset() {
    while (etchDiv.firstChild) {
        etchDiv.removeChild(etchDiv.firstChild)
    }
    let numSquares = prompt('How many squares on each side?')
    etchDiv.style.gridTemplateColumns = 'repeat(' + numSquares + ', 1fr)'
    etchDiv.style.gridTemplateRows = 'repeat(' + numSquares + ', 1fr)'
    createGrid(numSquares)
}