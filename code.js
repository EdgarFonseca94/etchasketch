// create squares for each row
let canvas = document.getElementById("grid-canvas");

for(j=0; j < 256; j++) {
    let square = document.createElement('div');
    square.className = "grid-square";
    canvas.appendChild(square);
}

canvas.setAttribute('style', 'grid-template-columns: repeat(16, 1fr);');

Array.from(canvas.children).forEach((child) => {
    child.addEventListener('mouseover', () => {
        child.style.backgroundColor = 'yellow';
    });
});