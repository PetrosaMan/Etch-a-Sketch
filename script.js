
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

        // add mouseover event to randomly change square
        // background on mouseover
        square.addEventListener('mouseover', function(){
            square.classList.add('hovered');
            const r = parseInt(Math.random() * 255);
            const g = parseInt(Math.random() * 255);
            const b = parseInt(Math.random() * 255);
            square.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b  +')';            
        });
        
        gridContainer.appendChild(square);
    }
}



btn.addEventListener("click", function() {
    let squares = parseInt(prompt("Enter grid squares per side required. Maximum 100 squares", '0'));    
    if(squares === 0 || isNaN(squares)) {
         alert( "Invalid entry, try again");
         return;    
    }
    drawGrid(squares);    
});



