const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const map = {};

    const reversed = domains.map((domain) => domain.split('.').reverse());

    for (let i = 0; i < reversed.length; i++) {
        let concated = '';
        for (let j = 0; j < reversed[i].length; j++) {
            concated += `.${reversed[i][j]}`
            map[concated] = (map[concated] || 0) + 1;
        }
    }
    
    return map;
}

module.exports = {
  getDNSStats
};
