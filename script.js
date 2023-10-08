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

const createPlayer = (sign) => {
  this.sign = sign;
  const getSign = () => sign;
  return { sign, getSign };
};

const gameBoard = (() => {
  const grid = document.querySelector('.board-container');
  let boardElements = new Array(9).fill('');

  const createBoard = () => {
    for (let i = 0; i < boardElements.length; i++) {
      let gridCell = document.createElement('div');
      gridCell.dataset.position = i;
      gridCell.classList.add('board-cell');
      gridCell.textContent = boardElements[i];
      grid.appendChild(gridCell);
    }
  };
  const clearBoard = () => {
    const gridCell = document.querySelectorAll('.board-cell');
    [...gridCell].forEach((elem) => {
      elem.textContent = '';
    });
  };

  const renderBoard = () => {
    const boardCell = document.querySelectorAll('.board-cell');
    [...boardCell].forEach((elem, index) => {
      elem.textContent = boardElements[index];
      boardElements[index] == 'x'
        ? elem.classList.toggle('x')
        : elem.classList.toggle('o');
    });
  };

  const updateBoardArr = (ind) => {
    boardElements[ind] = gameControl.getCurrPlayer();
  };
  const getBoard = () => {
    return boardElements;
  };
  // clear the board element array
  const clearBoardArr = () => boardElements.fill('');
  return {
    createBoard,
    clearBoard,
    renderBoard,
    clearBoardArr,
    getBoard,
    updateBoardArr,
  };
})();

const gameControl = (() => {
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
  //   const isOver = false;
  const playerOne = createPlayer('x');
  const playerTwo = createPlayer('o');
  let currentPlayer = playerOne.sign;

  const startGame = () => gameBoard.createBoard();
  const getCurrPlayer = () => {
    return currentPlayer;
  };
  const setCurrPlayer = () => {
    currentPlayer = getCurrPlayer() == 'x' ? 'o' : 'x';
  };
  const setDisplayMsg = (msg) => {
    const display = document.querySelector('.display');
    display.textContent = msg;
  };
  const checkWin = () => {
    const board = gameBoard.getBoard();
    for (let i = 0; i < winningArray.length; i++) {
      const newSet = new Set(winningArray[i].map((ind) => board[ind]));
      const sign = [...newSet][0];
      if (newSet.size == 1 && (sign == 'x' || sign == 'o')) {
        // isOver = true;
        setDisplayMsg(`${sign} win!`);
        resetGame();
      } else {
        if (board.every((elem) => elem != '')) {
          //   isOver = true;
          setDisplayMsg("It's a tie!");
          resetGame();
        }
      }
    }
  };

  const playRound = () => {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('board-cell')) {
        // userPick = 'x';
        let ind = e.target.dataset.position;
        gameBoard.updateBoardArr(ind);
        gameBoard.renderBoard();
        checkWin();
        setCurrPlayer(); // update current player
      }
    });
  };
  const resetGame = () => {
    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener('click', () => {
      gameBoard.clearBoard();
      gameBoard.clearBoardArr();
      setDisplayMsg('X Starts First');
    });
  };
  return {
    startGame,
    setDisplayMsg,
    checkWin,
    playRound,
    resetGame,
    getCurrPlayer,
  };
})();

gameControl.startGame();
gameControl.playRound();
gameControl.resetGame();
