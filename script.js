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

// const player = (function (moveType) {
//   const moveType = moveType;
//   let playerMoveArr = new Array(9).fill('');
//   return {
//     moveType: moveType,
//     playerMoveArr: playerMoveArr,
//   };
// })();

// const board = (function () {
//     const createBoard = function() {
//         for (let i = 0; i < boardElements.length; i++) {
//             let gridCell = document.createElement('div');
//             gridCell.dataset.position = i;
//             gridCell.classList.add('board-cell');
//             gridCell.textContent = boardElements[i];
//             grid.appendChild(gridCell);
//           }
//     }

//     const getCell = function() {

//     };

//     const setCell = function() {

//     };

//     const resetBoard = (function(){
//     })();

// const displayControl = (function() {
//     const restartGame = function() {
//         // clear board
//         // reset player arrays

//     };
//     })
// })();

// const gameControl = (function() {
//     // create game

//     const createPlayer = function() {
//         const player1 = player('x');
//         const player2 = player('o')
//         return {
//             player1 : player1,
//             player2 : player2
//         }
//     }

//     const checkingWin = function() {
//         const winningArray = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//           ];

//     };

// })();

const grid = document.querySelector('.board-container');
const playerBtn = document.querySelectorAll('.player');
let playerOne = createPlayer('x');
let playerTwo = createPlayer('o');
let boardElements = new Array(9).fill('');
let currentPick = 'x';
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
function createPlayer(sign) {
  return { sign };
}
function startGame() {
  createBoard();
}
function checkWin() {
  for (let i = 0; i < winningArray.length; i++) {
    const newSet = new Set(winningArray[i].map((ind) => boardElements[ind]));
    const sign = [...newSet][0];
    if (newSet.size == 1 && (sign == 'x' || sign == 'o')) {
      console.log(`${sign} win!`);
      return;
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
// clear the board element array
function clearBoardArr() {
  boardElements.fill('');
  console.log(boardElements);
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
function updateBoard() {
  const cell = document.querySelectorAll('.board-cell');
  boardElements[i] == 1
    ? gridCell.classList.toggle('x')
    : gridCell.classList.toggle('o');
}

// start game
startGame();
document.addEventListener('click', (e) => {});
document.addEventListener('click', (e) => {
  if (e.target.className == 'board-cell') {
    // userPick = 'x';
    let ind = e.target.dataset.position;
    boardElements[ind] = currentPick;
    e.target.textContent = currentPick;
    currentPick == 'x'
      ? e.target.classList.toggle('x')
      : e.target.classList.toggle('o');
    checkWin();
  }

  if (e.target.className == 'control') {
    clearBoard();
    clearBoardArr();
  }
});

[...playerBtn].forEach((btn) =>
  btn.addEventListener('click', (e) => {
    currentPick = e.target.id;
  })
);

// console.log(winningArray[0]);
// console.log(test);
// console.log(test.every((elem) => Boolean(elem)));
