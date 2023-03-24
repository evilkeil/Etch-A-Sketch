let rowColumn = 16;    // rows and colums is 16 by default
const setRowColumn = document.querySelector('.set');

// setting up the button which prompts the user to input the amount of rows and colmns in the etch a sketch grid 
setRowColumn.addEventListener("click", rowColumnSetter); 

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


