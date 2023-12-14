const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function getStr(param) {
  if (param !== undefined) return String(param);
  else return '';
}
function gerAddStr(options) {
  let addStr = '';
  if (getStr(options.addition) && options.additionRepeatTimes) {
    for (let j = 0; j <= options.additionRepeatTimes - 1; j++) {
      addStr += getStr(options.addition);
      if(j < options.additionRepeatTimes - 1) {
        addStr += getStr(options.additionSeparator) ? getStr(options.additionSeparator) : '|';
      }
    }
  } else if (getStr(options.addition)) addStr += getStr(options.addition);
  return addStr;
}
function repeater(str, options) {
  let result = '';
  
  if (options.repeatTimes) {
    for(let i = 0; i <= options.repeatTimes - 1; i++) {
      result += getStr(str);
      result += gerAddStr(options);
      if(i<options.repeatTimes -1) {
        if (getStr(options.separator)) {
          result += getStr(options.separator);
        } else result += '+';
      }
    }
  } else {
    result += getStr(str);
    result += gerAddStr(options);
  }
return result;
}

module.exports = {
  repeater
};
