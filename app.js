let rowColumn = 16;    // rows and colums is 16 by default
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

//testing document fragment 

// Create a new DocumentFragment
const fragment = document.createDocumentFragment();

// Create some new DOM nodes and append them to the fragment
const p1 = document.createElement("p");
p1.textContent = "This is paragraph 1.";
fragment.appendChild(p1);

const p2 = document.createElement("p");
p2.textContent = "This is paragraph 2.";
fragment.appendChild(p2);

// Append the entire fragment to the main document tree
sketchPad.appendChild(fragment);


