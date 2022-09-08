const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = string => string.replace(/(.)\1{1,}/gi, (chars) => `${chars.length}${chars[0]}`);

module.exports = {
  encodeLine
};
