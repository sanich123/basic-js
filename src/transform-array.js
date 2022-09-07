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
function transform(arr) {
  if (!arr || !Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--double-next") {
      if (arr[i + 1]) {
        result.push(arr[i + 1]);
      }
    }
    if (arr[i] === "--discard-prev") {
      if (result.length > 0) {
        result.pop();
      }
    }
    if (arr[i] === "--double-prev") {
      if (arr[i - 1]) {
        result.push(arr[i - 1]);
      }
    }
    if (arr[i] === "--discard-next") {
      i++;
    } else {
      result.push(arr[i]);
    }
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
