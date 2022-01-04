import { createGameState } from "./createGameState";
import { createSquaresInBoard } from "./createSquaresInBoard";
import { createPlayerState } from "./createPlayerState";

export function createPlayBoard() {
  const playBoard = document.createElement("div");
  playBoard.className = "pb";
  playBoard.style.width = "100%";
  playBoard.style.padding = "1rem";
  playBoard.style.display = "grid";
  playBoard.style.gridTemplateColumns = "1fr 1fr 1fr";
  playBoard.style.gridTemplateRows = "1fr 1fr 1fr";

  const { setState: setGameState } = createGameState();

  const playerOneState = createPlayerState();
  const playerTwoState = createPlayerState();

  const boardSquares = createSquaresInBoard({
    setGameState,
    playerOneState,
    playerTwoState,
  });

  boardSquares.forEach((square) => {
    playBoard.appendChild(square);
  });

  return playBoard;
}
