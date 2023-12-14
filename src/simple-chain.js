const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainResult: '',
  getLength() {
    return this.chainResult.split('(').length - 1;
  },
  addLink(value) {
    this.chainResult += `${this.getLength() === 0 ? '' : '~~'}( ${value} )`;
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.getLength()) {
      const chainArr = this.chainResult.split('~~');
      chainArr.splice(position - 1, 1);
      this.chainResult = chainArr.join('~~');
      return this;
    } else 
    {
      this.chainResult = '';
      throw new TypeError('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {

    this.chainResult = this.chainResult.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    const result = this.chainResult;;
    this.chainResult = '';
    return result;
  }
};

module.exports = {
  chainMaker
};
