const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(arr) {

    let arrDepth = [];
    
    if (Array.isArray(arr)) {
      arrDepth = arr.map((element) => this.calculateDepth(element)); 
    } else return 0;

    return 1 + Math.max(0, ...arrDepth);
    

  }
}

module.exports = {
  DepthCalculator
};
