const gridContainer = document.querySelector(".grid-container");
const btn = document.querySelector(".btn");

let squares;

function drawGrid(squares) {
    // clear the previous grid
    gridContainer.textContent = "";        

    // calculate the size of each square
    const squareSize = 800 / squares;

    // Add new squares to the grid
    for(let i = 0; i < squares * squares; i++) {
        const square = document.createElement("div");
        /*square.innerText = i;*/
        square.classList.add("square");               
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        gridContainer.appendChild(square);
    }
}

btn.addEventListener("click", function() {
    let squares = parseInt(prompt("Enter grid squares per side required", '0'));
    drawGrid(squares);    
});

