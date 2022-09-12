const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

function vigenereCipher(string1, string2) {
    let result = '';

    for (let i = 0; i < string1.length; i++) {
        const firstIndex = string1[i].charCodeAt() - 97;
        const secondIndex = string2[i].charCodeAt() - 97;
        const cipher = (firstIndex + secondIndex) % 26;
        result += String.fromCharCode(cipher + 97)
    }
    return result;
}

console.log(vigenereCipher('attack a', 'alphonse'))
console.log(`${String.fromCharCode(97)}`)
class VigenereCipheringMachine {
  encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
