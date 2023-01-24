function changeColor(e) {
    Array.from(canvas.children).forEach((child) => {
        child.style.backgroundColor = 'white';
    });

    Array.from(canvas.children).forEach((child) => {
        child.addEventListener('mouseover', () => {
            child.style.backgroundColor = e;
        });
    });
}
function changeCanvasSize(squarePerSide) {
    // clears canvas
    canvas.innerHTML = "";

    // create new grid canvas
    for(i=0; i < Math.pow(squarePerSide,2) ; i++) {
        let square = document.createElement('div');
        square.className = "grid-square";
        canvas.appendChild(square);
    }
    canvas.setAttribute('style', 'grid-template-columns: repeat(' + squarePerSide + ', 1fr);');

    Array.from(canvas.children).forEach((child) => {
        child.addEventListener('mouseover', () => {
            child.style.backgroundColor = 'grey';
        });
    });
}

// create squares for each row
let canvas = document.getElementById("grid-canvas");


// code below creates 16 x 16 grid
for(i=0; i < 625; i++) {
    let square = document.createElement('div');
    square.className = "grid-square";
    canvas.appendChild(square);
}

canvas.setAttribute('style', 'grid-template-columns: repeat(25, 1fr);');

Array.from(canvas.children).forEach((child) => {
    child.addEventListener('mouseover', () => {
        child.style.backgroundColor = 'black';
    });
});