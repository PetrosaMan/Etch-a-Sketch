
"use strict"

const gridContainer = document.querySelector(".grid-container");
const btn = document.querySelector(".btn");

let squares;

function drawGrid(squares) {
    // clear the previous grid
    gridContainer.textContent = "";        

    // calculate the size of each square
    const squareSize = 600 / squares;

    // Add new squares to the grid
    for(let i = 0; i < squares * squares; i++) {
        const square = document.createElement("div");        
        square.classList.add("square");               
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        // add mouseover event to change color
        square.addEventListener('mouseover', function(){
          square.classList.add('hovered');
        });
        gridContainer.appendChild(square);
    }
}

btn.addEventListener("click", function() {
    let squares = parseInt(prompt("Enter grid squares per side required", '0'));
    console.log('squares required: ', squares);
    if(squares === 0) {
         alert( "Invalid entry, try again");
         return;
    } else if (isNaN(squares)) {
        alert  ('Invalid input, try again');
        return;
    }
    drawGrid(squares);    
});



