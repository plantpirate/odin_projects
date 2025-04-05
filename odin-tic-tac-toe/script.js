// const ticTacToe = (function () {
//   let gameboard = [];

//   const createPlayer = (name) => {
//     const playerName = name;

//     let score = 0;
//   };
// })();

function GameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 9; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;
}
