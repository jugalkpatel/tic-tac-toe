export function createTwoDimensionalArray(row, column) {
  const arr = new Array(row);

  for (let i = 0; i < row; i++) {
    arr[i] = new Array(column).fill("");
  }

  return arr;
}
