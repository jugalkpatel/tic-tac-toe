import { SIZE_OF_THE_BOARD } from "./constants";
export function createGameState() {
  const state = new Array(SIZE_OF_THE_BOARD);

  for (let i = 0; i < SIZE_OF_THE_BOARD; i++) {
    state[i] = new Array(SIZE_OF_THE_BOARD);
  }

  function setState(row, column, value) {
    state[row][column] = value;
  }

  return { state, setState };
}
