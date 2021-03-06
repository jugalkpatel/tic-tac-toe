import { SIZE_OF_THE_BOARD } from "./constants";
import { createTwoDimensionalArray } from "./utils/createTwoDimensionalArray";

export function createGameState() {
  const initialValue = createTwoDimensionalArray(
    SIZE_OF_THE_BOARD,
    SIZE_OF_THE_BOARD
  );

  const gameState = {
    value: initialValue,
    record: { draws: 0, winnerX: 0, winnerO: 0 },
    updateRecord: function (playerOneWin, playerTwoWin) {
      if (playerOneWin) {
        this.record.winnerO += 1;
        return;
      }

      if (playerTwoWin) {
        this.record.winnerX += 1;
        return;
      }

      this.record.draws += 1;
    },
    isGameOver: function () {
      for (let i = 0; i < SIZE_OF_THE_BOARD; i++) {
        for (let j = 0; j < SIZE_OF_THE_BOARD; j++) {
          if (this.value[i][j] === "") {
            return false;
          }
        }
      }
      return true;
    },
    setGameState: function (row, column, value) {
      console.log(this.value);
      this.value[row][column] = value;
    },
    resetState: function () {
      for (let i = 0; i < SIZE_OF_THE_BOARD; i++) {
        for (let j = 0; j < SIZE_OF_THE_BOARD; j++) {
          this.value[i][j] = "";
        }
      }
    },
  };

  return gameState;
}
