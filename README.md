# Etch-a-Sketch
Create a web page with a 16 x 16 grid of squares

The mouseover event listener is inside the for loop because we want to attach the event handler to each individual square as they’re created. Each grid square needs its own listener so it can respond when the mouse hovers over it.

If we put the listener outside the loop, it wouldn't apply to the squares since they haven't been created yet. Think of the loop as setting up each square with its own behavior as it’s being added to the grid.