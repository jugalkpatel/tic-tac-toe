import { SIZE_OF_THE_BOARD } from "./constants";

function isGameComplete({ square, playerOne, playerTwo, game }) {
  const isDraw = game.isGameOver();
  if (playerOne.isGameOver || playerTwo.isGameOver || isDraw) {
    game.resetState();
    playerOne.resetState();
    playerTwo.resetState();
    square.dispatchEvent(new CustomEvent("game-over", { bubbles: true }));
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

export function createSquaresInBoard({ game, playerOne, playerTwo }) {
  const squares = [];
  const values = ["O", "X"];
  let currentValue = values[0];

  for (let i = 0; i < SIZE_OF_THE_BOARD; i++) {
    for (let j = 0; j < SIZE_OF_THE_BOARD; j++) {
      const square = document.createElement("button");
      square.textContent = game.value[i][j];
      square.id = `pb__sq-${i}_${j}`;
      styleSquare(square);

      function handleClick() {
        if (values.includes(game.value[i][j])) {
          return;
        }

        game.setGameState(i, j, currentValue);
        square.textContent = currentValue;

        if (currentValue === values[0]) {
          currentValue = values[1];
          playerOne.setPlayerState(i, j);
        } else {
          currentValue = values[0];
          playerTwo.setPlayerState(i, j);
        }

        isGameComplete({ square, playerOne, playerTwo, game });
      }

      square.addEventListener("click", handleClick);

      squares.push(square);
    }
  }

  return squares;
}
