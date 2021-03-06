import { findSumOfElements } from "./utils/findSumOfElements";

function winAlongRows(row, rowsContainer) {
  rowsContainer[row] += 1;

  if (rowsContainer[row] === 3) {
    return -1; // indicate player win
  }
}

function winAlongColumns(col, columnContainer) {
  columnContainer[col] += 1;

  if (columnContainer[col] === 3) {
    return -1; // indicate player win
  }
}

function winAlongDiagonal(row, col, diagonalContainer) {
  if (row === col) {
    diagonalContainer[row] += 1;
  }

  if (findSumOfElements(diagonalContainer) === 3) {
    return -1; // indicate player wins
  }
}

function winAlongRevDiagonal(row, col, revDiagonalContainer) {
  if (row + col + 1 === 3) {
    revDiagonalContainer[row] += 1;
  }

  if (findSumOfElements(revDiagonalContainer) === 3) {
    return -1; // indicate player win
  }
}

export function createPlayerState() {
  const state = {
    rowsContainer: new Array(0, 0, 0),
    columnContainer: new Array(0, 0, 0),
    diagonalContainer: new Array(0, 0, 0),
    revDiagonalContainer: new Array(0, 0, 0),
    isGameOver: false,
    setPlayerState: function (row, col) {
      if (winAlongRows(row, this.rowsContainer) === -1) {
        this.isGameOver = true;
        return;
      }

      if (winAlongColumns(col, this.columnContainer) === -1) {
        this.isGameOver = true;
        return;
      }

      if (winAlongDiagonal(row, col, this.diagonalContainer) === -1) {
        this.isGameOver = true;
        return;
      }

      if (winAlongRevDiagonal(row, col, this.revDiagonalContainer) === -1) {
        this.isGameOver = true;
        return;
      }
    },
    resetState: function () {
      this.rowsContainer = new Array(0, 0, 0);
      this.columnContainer = new Array(0, 0, 0);
      this.diagonalContainer = new Array(0, 0, 0);
      this.revDiagonalContainer = new Array(0, 0, 0);
      this.isGameOver = false;
    },
  };
  return state;
}
