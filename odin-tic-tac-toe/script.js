// const ticTacToe = (function () {
//   let gameboard = [];

//   const createPlayer = (name) => {
//     const playerName = name;

//     let score = 0;
//   };
// })();

// function GameBoard() {
//   const rows = 3;
//   const columns = 3;
//   const board = [];

//   for (let i = 0; i < rows; i++) {
//     board[i] = [];
//     for (let j = 0; j < columns; j++) {
//       board[i].push(Cell());
//     }
//   }

//   const getBoard = () => board;
// }
const Player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;
  return { getName, getMark };
};

const GameBoard = () => {
  const board = Array(9).fill("");
  const getBoard = () => board;
  const resetBoard = () => {
    for (i = 0; i < board.length; i++) {
      board[i] = "";
    }
  };
  console.log(board);
  return { getBoard, resetBoard };
};

GameBoard();
