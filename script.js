const gridContainer = document.querySelector(".grid-container");
const btn = document.querySelector(".btn");

let squares;

function drawGrid(squares) {
    console.log("Draw grid function called: ", squares);
    const totalSquares = squares * squares;
    gridContainer.textContent = "";
    for(let i = 0; i < totalSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.textContent = i.toString();
        gridContainer.appendChild(div);
    }
}

btn.addEventListener("click", function() {
    squares = prompt("Enter grid squares required: ", '');
    drawGrid(squares);
});

