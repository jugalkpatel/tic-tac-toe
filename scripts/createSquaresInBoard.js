import { NO_OF_BOXES_IN_PLAYBOARD } from "./constants";
export function createSquaresInBoard() {
  const squares = [];

  for (let i = 0; i < NO_OF_BOXES_IN_PLAYBOARD; i++) {
    const box = document.createElement("section");
    box.style.border = "1px solid black";
    squares.push(box);
  }

  return squares;
}
