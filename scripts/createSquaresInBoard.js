import { NO_OF_BOXES_IN_PLAYBOARD } from "./constants";
export function createSquaresInBoard() {
  const squares = [];

  const values = ["O", "X"];

  let currentValue = values[0];

  for (let i = 0; i < NO_OF_BOXES_IN_PLAYBOARD; i++) {
    const box = document.createElement("button");
    box.id = `pv__sq-${i}`;

    box.style.backgroundColor = "transparent";
    box.style.border = "1px solid black";
    box.style.display = "flex";
    box.style.color = "black";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.fontSize = "1.5rem";

    function clickHandler() {
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

  return squares;
}
