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
class VigenereCipheringMachine {
  constructor(condition = true) {
    this.condition = condition;
  }
  _getNonAlphabet(phrase) {
    const map = new Map();
    for (let i = 0; i < phrase.length; i++) {
      if (/[^a-z]/gi.test(phrase[i])) {
        map.set(`${phrase[i]} + ${i}`, i);
      }
    }
    return map;
  }
  _getCodeToAllLength(cleanedWord, code) {
    const length = Math.floor(cleanedWord.length / code.length);
    const rest = cleanedWord.length % code.length;
    return `${code.repeat(length)}${code.slice(0, rest)}`;
  }

  _insertNonAlphabetSymbols(result, nonAlphabetSymbols) {
    for (const [key, value] of nonAlphabetSymbols) {
      result.splice(value, 0, key[0]);
    }
    return result;
  }

  decrypt(phrase, code) {
    if (!phrase || !code) {
      throw new Error("Incorrect arguments!");
    }
    const result = [];
    const cleanedWord = phrase.replace(/[^a-z]/gi, "");
    const codeToAllLength = this._getCodeToAllLength(cleanedWord, code);
    const nonAlphabetSymbols = this._getNonAlphabet(phrase);

    for (let i = 0; i < cleanedWord.length; i++) {
      const numberOfChar = cleanedWord[i].charCodeAt() - 65;
      const numberOfCharInKey = codeToAllLength[i].charCodeAt() - 97;
      const decryptCipher = (numberOfChar - numberOfCharInKey + 26) % 26;
      result.push(String.fromCharCode(decryptCipher + 65));
    }
    if (this.condition) {
      return this._insertNonAlphabetSymbols(result, nonAlphabetSymbols).join("");
    } else {
      return this._insertNonAlphabetSymbols(result, nonAlphabetSymbols).reverse().join("");
    }
  }

  encrypt(phrase, code) {
    if (!phrase || !code) {
      throw new Error("Incorrect arguments!");
    }
    const result = [];
    const cleanedWord = phrase.replace(/[^a-z]/gi, "");
    const codeToAllLength = this._getCodeToAllLength(cleanedWord, code);
    const nonAlphabetSymbols = this._getNonAlphabet(phrase);

    for (let i = 0; i < cleanedWord.length; i++) {
      const numberOfChar = cleanedWord[i].charCodeAt() - 97;
      const numberOfCharInKey = codeToAllLength[i].charCodeAt() - 97;
      const encryptCipher = (numberOfChar + numberOfCharInKey) % 26;
      result.push(String.fromCharCode(encryptCipher + 65));
    }
    if (this.condition) {
      return this._insertNonAlphabetSymbols(result, nonAlphabetSymbols).join("");
    } else {
      return this._insertNonAlphabetSymbols(result, nonAlphabetSymbols).reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
