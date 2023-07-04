class Cell{
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  handleClick() {
    console.log(`Cell clicked: (${this.row}, ${this.col})`)
    return `Cell clicked: (${this.row}, ${this.col})`
  }


}

// Grid size
const gridSize = 10;
const gridLength = 170;
const gridWidth = 20

// Grid creation
const grid = document.getElementById('grid');

// Create the grid cells
for (let i = 0; i < gridWidth; i++) {
  for (let j = 0; j < gridLength; j++) {
    const cell = new Cell(i, j);
    const cellElement = document.createElement('div');
    cellElement.className = 'cell';
    cellElement.textContent = 'Cell';
    cellElement.addEventListener('click', () => showPopup(cell));
    grid.appendChild(cellElement);
  }
}

// Show popup with "hello!" message
function showPopup(cell) {
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popupText');
  popupText.textContent = cell.handleClick();
  popup.style.display = 'block';
}


// Hide popup when clicked outside of it
window.addEventListener('click', (event) => {
  const popup = document.getElementById('popup');
  if (event.target.tagName == 'HTML'){
    popup.style.display = 'none';
  }
});


