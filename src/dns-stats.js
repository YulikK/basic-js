const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const shortDomains = [];
  const objectsDomains = {};
  domains.map((domain) => {
    const domainArray = domain.split('.').reverse();
    let addDomain = '';
    domainArray.map((domainElement) => {
      addDomain += '.' + domainElement;
      shortDomains.push(addDomain);
    })
  })
  shortDomains.forEach((element) =>{
    if (objectsDomains[element] != undefined) ++objectsDomains[element];
    else objectsDomains[element] = 1;
});
  console.log(shortDomains);
  return objectsDomains;
}

module.exports = {
  getDNSStats
};
