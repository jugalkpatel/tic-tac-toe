import { SIZE_OF_THE_BOARD } from "./constants";

export function createSquaresInBoard(setGameState) {
  const squares = [];

  const values = ["O", "X"];

  let currentValue = values[0];

  for (let i = 0; i < SIZE_OF_THE_BOARD; i++) {
    for (let j = 0; j < SIZE_OF_THE_BOARD; j++) {
      const box = document.createElement("button");
      box.id = `pb__sq-${i}_${j}`;

      box.style.backgroundColor = "transparent";
      box.style.border = "1px solid black";
      box.style.display = "flex";
      box.style.color = "black";
      box.style.justifyContent = "center";
      box.style.alignItems = "center";
      box.style.fontSize = "1.5rem";

      function clickHandler() {
        setGameState(i, j, currentValue);
        box.textContent = currentValue;

        if (currentValue === values[0]) {
          currentValue = values[1];
        } else {
          currentValue = values[0];
        }

        box.disabled = true;
      }

      box.addEventListener("click", clickHandler);

      squares.push(box);
    }
  }

  return squares;
}
