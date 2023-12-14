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
    this._genSquareEncrypt();
    this._isDirect = true;
    if (direct !== undefined) this._isDirect = direct;
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
      const addChar = key.slice(index, index + 1);
      key += addChar;
      index++;
    }
    return key;
  }
  _addCase(code, text) {
    let positionCase = 0;
    while (text.indexOf(' ', positionCase) > 0) {
      const codeArray = code.split('');
      codeArray.splice(text.indexOf(' ', positionCase), 0, ' ');
      code = codeArray.join('');
      positionCase = text.indexOf(' ', positionCase) + 1;
    }
    return code;
  }

  encrypt(text, key) {
    if( text && key) {
      const textCode = text.toUpperCase().split(' ').join('');
      key = this._completeLength(key.toUpperCase(), textCode.length);
      let code = '';
      let keyIndex = 0;
      for (var i = 0; i < textCode.length; i++) {
        if (this._en.indexOf(textCode[i]) === -1) {
          code += textCode[i];
        } else {
          code += this._square[this._en.indexOf(textCode[i])][this._en.indexOf(key[keyIndex])];
          keyIndex++;
        }
      }
      code = this._addCase(code, text);
      return this._isDirect ? code : code.split('').reverse().join('');
    } else throw new TypeError('Incorrect arguments!');
  }
  decrypt(text, key) {
    if( text && key){
      let code = '';
      const textCode = text.toUpperCase().split(' ').join('');
      key = this._completeLength(key.toUpperCase(), textCode.length);
      let keyIndex = 0;
      for (let i = 0; i < textCode.length; i++) {
        if(this._en.indexOf(textCode[i]) === -1) {
          code += textCode[i];
        } else {
          const row = this._en.indexOf(key[keyIndex]);
          const coll = this._square[row].indexOf(textCode[i]);
          code += this._en[coll];
          keyIndex ++;
        }
      }
      code = this._addCase(code, text);
      return this._isDirect ? code : code.slice().split('').reverse().join('') ;
    } else throw new TypeError('Incorrect arguments!');
  }
}

module.exports = {
  VigenereCipheringMachine
};
