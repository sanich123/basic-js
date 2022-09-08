const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
const doubleNext = "--double-next";
const doublePrev = "--double-prev";
const discardNext = "--discard-next";
const discardPrev = "--discard-prev";
const errMsg = `'arr' parameter must be an instance of the Array!`

function transform(arr) {
  if (!arr || !Array.isArray(arr)) {
    throw new Error(errMsg);
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const prev = arr[i - 1];
    const next = arr[i + 1];
    if (curr === doubleNext) {
      if (next) result.push(next);
    }
    if (curr === discardPrev) {
      if (result.length > 0) result.pop();
    }
    if (curr === doublePrev) {
      if (prev) result.push(prev);
    }
    if (curr === discardNext) {
      i += 2;
    } else if (
      curr !== discardNext &&
      curr !== discardPrev &&
      curr !== doubleNext &&
      curr !== doublePrev
    ) result.push(arr[i]);
  }

  return result;
}

const arrays = [
  ["--discard-prev", 1, 2, 3],
  ["--double-prev", 1, 2, 3],
  [1, 2, 3, "--double-next"],
  [1, 2, 3, "--discard-next"],
  [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
  [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
  [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
  [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
];

module.exports = {
  transform,
};
