// empty board
// assign x or o
// user
// -- click on the board to place the move
// enemy
// -- click on the board to place the move
// winning criteria
// -- 3 down
// -- 3 horizontal
// -- 3 diagional
// draw
grid = document.querySelector('.board-container');
let boardElements = [, , , , , , , , ,];

// clear board
function createBoard() {
  for (let i = 0; i < boardElements.length; i++) {
    let gridCell = document.createElement('div');
    gridCell.dataset.position = i;
    gridCell.classList.add('board-cell');
    gridCell.textContent = boardElements[i];
    grid.appendChild(gridCell);
  }
}
createBoard();
function updateBoard() {
  let userPick = 'x';

  // get user selection
  //
  const cell = document.querySelectorAll('.board-cell');
  boardElements[i] == 1
    ? gridCell.classList.toggle('x')
    : gridCell.classList.toggle('o');
}

document.addEventListener('click', (e) => {
  if (e.target.className == 'board-cell') {
    let userPick = 'x';
    let ind = e.target.dataset.position;
    boardElements[ind] = 1;
    e.target.textContent = 'x';
    userPick == 'x'
      ? e.target.classList.toggle('x')
      : e.target.classList.toggle('o');
    console.log(e.target);
  }
});
