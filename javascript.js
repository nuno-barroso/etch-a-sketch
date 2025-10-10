function styleCell (cell, height) {
    cell.style.height = height + 'px';
    cell.style.width = height + 'px';

    return cell;
}

function createGrid (dimensions) {
    let  dimValue = 0;

    if (dimensions != 0)
        dimValue = dimensions;
    else
        dimValue = 16;

    const grid = document.getElementById("grid");
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

function changeGrid () {
    const btn = document.getElementById("change-grid");

    btn.addEventListener("click", () => {
        let newGrid = prompt("Enter a number between 0 and 100");

        console.log(newGrid);
    });
}

createGrid(0);
hoverEffect();