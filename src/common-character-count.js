const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) !== -1) {
            count++;
            const index = str2.indexOf(str1[i]);
            const leftSide = str2.slice(0, index);
            const rightSide = str2.slice(index + 1);
            str2 = `${leftSide}${rightSide}`;
        }
    }
    return count;
}

module.exports = {
  getCommonCharacterCount
};
