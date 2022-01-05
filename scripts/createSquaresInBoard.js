import { SIZE_OF_THE_BOARD } from "./constants";

function isGameComplete(box, playerOne, playerTwo, gameState) {
  const isDraw = gameState.isGameOver();
  if (playerOne.isGameOver || playerTwo.isGameOver || isDraw) {
    gameState.resetState();
    playerOne.resetState();
    playerTwo.resetState();
    box.dispatchEvent(new CustomEvent("game-over", { bubbles: true }));
  }
}

function styleSquare(square) {
  square.style.backgroundColor = "transparent";
  square.style.border = "1px solid black";
  square.style.display = "flex";
  square.style.color = "black";
  square.style.justifyContent = "center";
  square.style.alignItems = "center";
  square.style.fontSize = "1.5rem";
}

export function createSquaresInBoard({
  gameState,
  playerOneState,
  playerTwoState,
}) {
  const squares = [];
  const values = ["O", "X"];
  let currentValue = values[0];

  for (let i = 0; i < SIZE_OF_THE_BOARD; i++) {
    for (let j = 0; j < SIZE_OF_THE_BOARD; j++) {
      const square = document.createElement("button");
      square.textContent = gameState.value[i][j];
      square.id = `pb__sq-${i}_${j}`;
      styleSquare(square);

      function handleClick() {
        if (values.includes(gameState.value[i][j])) {
          return;
        }

        gameState.setGameState(i, j, currentValue);
        square.textContent = currentValue;

        if (currentValue === values[0]) {
          currentValue = values[1];
          playerOneState.setPlayerState(i, j);
        } else {
          currentValue = values[0];
          playerTwoState.setPlayerState(i, j);
        }

        isGameComplete(square, playerOneState, playerTwoState, gameState);
      }

      square.addEventListener("click", handleClick);

      squares.push(square);
    }
  }

  return squares;
}
