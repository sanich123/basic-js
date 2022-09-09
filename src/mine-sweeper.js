const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = 0;
      const up = matrix[i - 1];
      const down = matrix[i + 1];
      const left = matrix[i][j - 1];
      const right = matrix[i][j + 1];

      if (up) {
        if (up[j]) result[i][j]++;
        if (up[j + 1]) result[i][j]++;
        if (up[j - 1]) result[i][j]++;
      }
      if (down) {
        if (down[j]) result[i][j]++;
        if (down[j + 1]) result[i][j]++;
        if (down[j - 1]) result[i][j]++;
      }
      if (left) result[i][j]++;
      if (right) result[i][j]++;
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
