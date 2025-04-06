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

// const Player = (name, mark) => {
//   const getName = () => name;
//   const getMark = () => mark;
//   return { getName, getMark };
// };

// const playerOne = ("Player One", "X");
// const playerTwo = ("Player Two", "O");

// let currentPlayer = "X";

// const switchPlayer = () => {
//   currentPlayer = currentPlayer === "X" ? "O" : "X";
//   console.log(currentPlayer);
// };

const playerControl = (
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) => {
  const players = [
    {
      name: playerOneName,
      mark: "X",
    },
    {
      name: playerTwoName,
      mark: "O",
    },
  ];

  let currentPlayer = players[0];

  const getMark = () => currentPlayer.mark;
  const getCurrentPlayer = () => currentPlayer;
  const switchPlayer = () => {
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  };
  return { getCurrentPlayer, switchPlayer, getMark };
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
const playerController = playerControl();
// console.log(playerController.getCurrentPlayer());
console.log(playerController.getCurrentPlayer());
playerController.switchPlayer();
console.log(playerController.getCurrentPlayer());
