let grid = document.getElementById('grid')
let slider = document.getElementById('myRange')
let gridSize =  slider.value

slider.oninput = function(){
    gridSize = this.value
    clearGrid()
}

function clearGrid(){
    grid.innerHTML = ''
    createGrid(gridSize)
}

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('gridelem')
    gridElement.addEventListener('mouseover', function(){
        gridElement.style.backgroundColor = "red"
    })
    grid.appendChild(gridElement)
  }
}


createGrid(gridSize)