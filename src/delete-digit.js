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
function deleteDigit(n) {
  const arrN = [...n.toString()].map(Number);
  const arrResult = [];
  for(let i = 0; i < arrN.length; i++) {
    if (i === 0) arrResult.push(Number(arrN.slice(i + 1).join('')));
    else if( i === arrN.length - 1) arrResult.push(Number(arrN.slice(0, i).join('')));
    else arrResult.push(Number([...arrN.slice(0, i), ...arrN.slice(i + 1)].join('')));
  }
  return Math.max(...arrResult);
}

module.exports = {
  deleteDigit
};
