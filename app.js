let rowColumn = 16; // rows and colums is 16 by default
const setRowColumn = document.querySelector('.set');

// setting up the button which prompts the user to input the amount of rows and colmns in the etch a sketch grid 
setRowColumn.addEventListener("click", rowColumnSetter);

// function for the row column setter
function rowColumnSetter() {
  let tempRowCol = prompt("Set rows and columns", 16);
  if (isNaN(tempRowCol)) {
    alert("Please enter a number");
  } else {
    tempRowCol = Number(tempRowCol);
    if (tempRowCol <= 0) {
      alert("Please set a number over zero");
    } else if (tempRowCol > 100) {
      alert("Please set a number less than 100");
    } else {
      rowColumn = tempRowCol;
      return tempRowCol;
    }
  }
}

const sketchPad = document.querySelector('#sketch');

var docFrag = document.createDocumentFragment();

for(var i = 0; i < rowColumn * rowColumn; i++) {
  var div = document.createElement('div'); // Create a new div element
  div.classList.add('sketchDiv');
  div.style.border = '1px solid red';
  docFrag.appendChild(div); // Append the div to the DocumentFragment
} 

sketchPad.appendChild(docFrag);

sketchPad.style.cssText = `grid-template-columns: repeat(${rowColumn}, 1fr); grid-template-rows: repeat(${rowColumn}, 1fr); border: 1px solid white;`;
