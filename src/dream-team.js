const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = '';
  if (members && members.length) {
    members.forEach((dataElement) => {
      if (typeof dataElement == 'string') {
        if (!teamName) teamName = '';
        teamName += dataElement.trim().slice(0, 1);
      }
    });
  }
  if (teamName) return teamName.toUpperCase().split('').sort().join('');
  return false;
}

module.exports = {
  createDreamTeam
};
