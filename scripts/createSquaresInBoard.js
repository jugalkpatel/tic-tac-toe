import { SIZE_OF_THE_BOARD } from "./constants";

function createRestartLayer(square) {
  const playBoard = document.querySelector(".pb");
  const restartLayer = document.createElement("div");
  restartLayer.className = "restart-layer";
  restartLayer.style.position = "absolute";
  restartLayer.style.width = "100%";
  restartLayer.style.height = "100%";
  restartLayer.style.cursor = "pointer";
  restartLayer.style.backgroundColor = "rgba(0,0,0,0)";
  restartLayer.addEventListener("click", () => {
    square.dispatchEvent(new CustomEvent("game-over", { bubbles: true }));
  });
  playBoard.appendChild(restartLayer);
}

function isGameComplete({ square, playerOne, playerTwo, game }) {
  const isPlayerOneWin = playerOne.isGameOver;
  const isPlayerTwoWin = playerTwo.isGameOver;
  const isDraw = game.isGameOver();

  if (isPlayerOneWin || isPlayerTwoWin || isDraw) {
    const elements = document.querySelectorAll(".pb__sq");
    elements.forEach((element) => {
      element.style.color = "#656565";
    });
    createRestartLayer(square);
    game.resetState();
    game.updateRecord(isPlayerOneWin, isPlayerTwoWin);
    playerOne.resetState();
    playerTwo.resetState();
    document.querySelector(".draw-label").textContent = game.record.draws;
    document.querySelector(".player1-label").textContent = game.record.winnerO;
    document.querySelector(".player2-label").textContent = game.record.winnerX;
  }
}

function styleSquare(square) {
  square.style.backgroundColor = "transparent";
  square.style.border = "3px solid black";
  square.style.display = "flex";
  square.style.color = "black";
  square.style.justifyContent = "center";
  square.style.alignItems = "center";
  square.style.fontSize = "1.5rem";
  square.style.fontWeight = "bold";
}

export function createSquaresInBoard({ game, playerOne, playerTwo }) {
  const squares = [];
  const values = ["O", "X"];
  let currentValue = values[0];

  for (let i = 0; i < SIZE_OF_THE_BOARD; i++) {
    for (let j = 0; j < SIZE_OF_THE_BOARD; j++) {
      const square = document.createElement("button");
      square.textContent = game.value[i][j];
      square.id = `pb__sq-${i}-${j}`;
      square.className = "pb__sq";
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
