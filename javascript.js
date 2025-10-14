function styleCell (cell, height) {
    cell.style.height = height + 'px';
    cell.style.width = height + 'px';

    return cell;
}

function createGrid (dimensions) {
    let  dimValue = 16;

    if (dimValue != dimensions)
        dimValue = dimensions;

    const grid = document.getElementById("grid");

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    const height = grid.offsetHeight;
    const cellHeight = height/dimValue;

    let cell = 0;

    for (let index = 0; index < (dimValue*dimValue); index++) {
        cell = document.createElement('div');
        grid.appendChild(styleCell(cell, cellHeight));
    }
}

function hoverEffect () {
    const grid = document.getElementById("grid");

    grid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "purple";
    });
}

function clearGrid () {
    const btn = document.getElementById("clear-grid");

    btn.addEventListener("click", () => {
        const grid = document.getElementById("grid");
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }

        createGrid(16);
    })
}

function changeGrid () {
    const btn = document.getElementById("change-grid");

    btn.addEventListener("click", () => {
        let newGrid = prompt("Enter a number between 1 and 100");

        if (isNaN(newGrid) || newGrid == null)
            newGrid = 16;

        if (newGrid == 0)
            newGrid = 1;

        if(newGrid > 100)
            newGrid = 100;

        createGrid(newGrid);
    });
}

createGrid(16);
hoverEffect();
changeGrid();
clearGrid();