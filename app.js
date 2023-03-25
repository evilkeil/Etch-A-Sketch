const sketchGrid = document.getElementById('sketch');

function setGrid(rows, columns) {
  // Clear any existing grid
  sketchGrid.innerHTML = '';

  // Set the CSS grid styles
  sketchGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  sketchGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

  // Create and add new div elements to the grid
  for (let i = 0; i < rows * columns; i++) {
    const div = document.createElement('div');
    div.classList.add('sketch-cell');
    div.classList.add('default-BG');
    sketchGrid.appendChild(div);
  }
}

const setBtn = document.querySelector('.btn.set');
setBtn.addEventListener('click', () => {
  const rows = prompt('Enter number of rows:');
  const columns = prompt('Enter number of columns:');
  setGrid(rows, columns);
});

document.querySelector('.btn.reset').addEventListener('click', function() {
  sketchGrid.innerHTML = '';
});

sketchGrid.addEventListener('mouseover',function(e){
  if (e.target.classList.contains('sketch-cell')){
    switch(true){
      case (e.target.classList.contains('default-BG')):
        e.target.classList.remove('default-BG');
        e.target.classList.add('sketchWhite');
        break;
      case (e.target.classList.contains('sketchWhite')):
        e.target.classList.remove('sketchWhite');
        e.target.classList.add('sketchGreen');
        break;
      case (e.target.classList.contains('sketchGreen')):
        e.target.classList.remove('sketchGreen');
        e.target.classList.add('sketchRed');
        break;
      case (e.target.classList.contains('sketchRed')):
        e.target.classList.remove('sketchRed');
        e.target.classList.add('sketchWhite');
        break;
    }
  }
})

// sketchGrid.addEventListener('mouseover',function(e){
//   if (e.target.classList.contains('sketch-cell')){
//     if(e.target.classList.contains('sketchWhite')){
//       e.target.classList.remove('sketchWhite');
//       e.target.classList.add('sketchGreen');

//     }else if(e.target.classList.contains('sketchGreen')){
//       e.target.classList.remove('sketchGreen');
//       e.target.classList.add('sketchRed');
//     }else if(e.target.classList.contains('sketchRed')){
//       e.target.classList.remove('sketchRed');
//       e.target.classList.add('sketchWhite');
//     }
//   }
// })