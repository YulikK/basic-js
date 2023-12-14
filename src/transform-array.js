const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const resultArray = [];
  let isDiscardNext,isDiscardPrev,isDoubleNext,isDoublePrev = false;
  if(Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === '--discard-next'
      || arr[i] === '--discard-prev'
      || arr[i] === '--double-next'
      || arr[i] === '--double-prev') {
        switch (arr[i]) {
          case '--discard-next':
            isDiscardNext = true;
            break;
          case '--discard-prev':
            if(resultArray.length && arr[i - 1] === resultArray[resultArray.length - 1]) resultArray.splice(resultArray.length - 1);
            break;
          case '--double-next':
            if(arr[i + 1]) {
              resultArray.push(arr[i + 1])
            }
            break;
          case '--double-prev':
            if(arr[i - 1] && arr[i - 1] === resultArray[resultArray.length - 1]) {
              resultArray.push(arr[i - 1])
            }
            break;
        }
      } else {
        if (!isDiscardNext) {
          resultArray.push(arr[i]);
        } else isDiscardNext = false;
      }







    }
  } else throw new TypeError(`'arr' parameter must be an instance of the Array!`);
  return resultArray;
}

module.exports = {
  transform
};
