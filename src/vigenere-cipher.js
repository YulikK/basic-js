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
  constructor (direct) {
    this._en = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this._square = [];
    this._isDirect = direct;
  }

  _genSquareEncrypt() {
    let language = this._en;
    for (let i = 0; i < language.length; i++) {
        this._square[i] = language.slice(i).concat(language.slice(0, i));
    }
  }
  _completeLength(key, length) {
    let index = 0;
    while (key.length < length) {
      key += key.slice(index, 1);
      index++;
    }
    return key;
  }
  encrypt(text, key) {
    if( text && key) {
      text = text.toUpperCase();
      key = this._completeLength(key.toUpperCase(), text.length - 1);
      this._genSquareEncrypt();
      let code = '';
      for (var i = 0; i < text.length; i++) {
        code += this.square[this._en.indexOf(text[i])][this._en.indexOf(key[i])];
      }
      return this._isDirect ? code : code.split('').reverse().join('');
    } else throw new TypeError('Incorrect arguments!');
  }
  decrypt(text, key) {
    if( text && key) {
      this._genSquareEncrypt();
      let code = '';
      for (let i = 0; i < text.length; i++) {
          const row = this._en.indexOf(key[i]);
          const coll = this.square[row].indexOf(text[i]);
          code += this._en[coll];
      }
      return this._isDirect ? code : code.split('').reverse().join('');
    } else throw new TypeError('Incorrect arguments!');
  }
}

module.exports = {
  VigenereCipheringMachine
};
