import { createGameState } from "./createGameState";
import { createSquaresInBoard } from "./createSquaresInBoard";
import { createPlayerState } from "./createPlayerState";

function removeAllChilds(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

export function createPlayBoard() {
  const playBoard = document.createElement("div");
  playBoard.className = "pb";
  playBoard.style.width = "100%";
  playBoard.style.padding = "1rem";
  playBoard.style.display = "grid";
  playBoard.style.gridTemplateColumns = "1fr 1fr 1fr";
  playBoard.style.gridTemplateRows = "1fr 1fr 1fr";

  const game = createGameState();

  const playerOne = createPlayerState();
  const playerTwo = createPlayerState();

  const boardSquares = createSquaresInBoard({
    game,
    playerOne,
    playerTwo,
  });

  boardSquares.forEach((square) => {
    playBoard.appendChild(square);
  });

  playBoard.addEventListener("game-over", function () {
    removeAllChilds(playBoard);
    const newBoardSquares = createSquaresInBoard({
      game,
      playerOne,
      playerTwo,
    });
    newBoardSquares.forEach((square) => playBoard.appendChild(square));
  });

  return playBoard;
}
