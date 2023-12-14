const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const noArgument = 'Unable to determine the time of year!';
  const errorText = 'Invalid date!';
  if(date) {
    if(date instanceof Date) {
      try {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const milliSeconds = date.getMilliseconds();
        const similar = new Date(year, month, day, hours, minutes, seconds, milliSeconds);
        if(similar.toString() !== date.toString()) throw new TypeError(errorText);
        if(year < 0 || year > 9999) return errorText;
        if(month < 0 || month > 12) return errorText;
        if(day < 0 || day > 31) return errorText;
        if(hours < 0 || hours > 24) return errorText;
        if(minutes < 0 || minutes > 60) return errorText;
        if(seconds < 0 || seconds > 60) return errorText;
        if(milliSeconds < 0 || milliSeconds > 1000) return errorText;
        if(month >= 2 && month <= 4) return 'spring';
        if(month >= 5 && month <= 7) return 'summer';
        if(month >= 8 && month <= 10) return 'autumn';
        if(month >= 11 || month == 0 || month == 1) return 'winter';
      } catch (error) 
      {
        throw new TypeError(errorText);
      }
    } else throw new TypeError(errorText);
  } else return noArgument;
}

module.exports = {
  getSeason
};
