const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
    const splitted = `${num}`;
    let max = 0;
    for (let i = 0; i < splitted.length; i++) {
        const leftSide = `${splitted.slice(0, i)}`;
        const rightSide = `${splitted.slice(i + 1)}`;
        const number = Number(`${leftSide}${rightSide}`);
   
        if (max < number && number !== num) {
            max = number;
        }
    }

    return max;
}

module.exports = {
  deleteDigit
};
