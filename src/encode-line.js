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
function encodeLine(str) {
  const strArray = [...str];
  const resultArr = [];
  let newSymbol = '';
  let countSymbol = 0;
  for (let i = 0; i < strArray.length; i++) {
    if(strArray[i] !== newSymbol) {
      resultArr.push((countSymbol > 1 ? countSymbol.toString() : '') + newSymbol);
      newSymbol = strArray[i];
      countSymbol = 1;
    } else {
      countSymbol ++;
    }
    if (i == strArray.length - 1) {
      resultArr.push((countSymbol > 1 ? countSymbol.toString() : '') + newSymbol);
    }
  }
  return resultArr.join('');
}

module.exports = {
  encodeLine
};
