import { NO_OF_BOXES_IN_PLAYBOARD } from "./constants";
export function createSquaresInBoard() {
  const squares = [];

  const values = ["O", "X"];

  let currentValue = values[0];

  for (let i = 0; i < NO_OF_BOXES_IN_PLAYBOARD; i++) {
    const box = document.createElement("section");
    box.style.border = "1px solid black";
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.fontSize = "1.5rem";

    box.addEventListener("click", () => {
      box.textContent = currentValue;

      if (currentValue === values[0]) {
        currentValue = values[1];
      } else {
        currentValue = values[0];
      }
    });

    squares.push(box);
  }

  return squares;
}
