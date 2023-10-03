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
let currentPick;
const winningArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkWin() {
  // this part evaluates if the user move wins
  for (let i = 0; i < winningArray.length; i++) {
    let test = [];
    for (let j = 0; j < winningArray[i].length; j++) {
      if (boardElements[winningArray[i][j]] == 1) {
        test.push(true);
      }
    }
    if (test.length > 2) {
      let result = test.every((elem) => elem == true);
      if (result) {
        console.log('win');
        console.log(winningArray[i]);
        break;
      }
    }
  }
}
// clear board
function clearBoard() {
  const gridCell = document.querySelectorAll('.board-cell');
  [...gridCell].forEach((elem) => {
    elem.textContent = '';
  });
}
// create board
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
  // get user selection
  //
  const cell = document.querySelectorAll('.board-cell');
  boardElements[i] == 1
    ? gridCell.classList.toggle('x')
    : gridCell.classList.toggle('o');
}
document.addEventListener('click', (e) => {
  if (e.target.className == 'player') {
    currentPick = e.target.id;
  }
});
document.addEventListener('click', (e) => {
  if (e.target.className == 'board-cell') {
    // userPick = 'x';
    let ind = e.target.dataset.position;
    boardElements[ind] = 1;
    e.target.textContent = currentPick;
    currentPick == 'x'
      ? e.target.classList.toggle('x')
      : e.target.classList.toggle('o');
    checkWin();
  }
});

// console.log(winningArray[0]);
// console.log(test);
// console.log(test.every((elem) => Boolean(elem)));
