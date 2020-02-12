const { map, sort, not, uniq, equals, unfold } = require('ramda');

const MIN = 359282;
const MAX = 820401;
const PASSWORD_MIN_LENGTH = 6;

const diff = (a, b) => { return a - b };

const sortedArray = array => (
  equals(sort(diff, array), array)
);

const repeatingArray = (array) => (not(equals(uniq(array), array)))

const minLengthRequirement = (array) => array.length === PASSWORD_MIN_LENGTH;

const checkDigits = (num) => {
  const numStringArray = num.toString().split('');
  const numArray = map(parseInt, numStringArray);

  return minLengthRequirement(numArray) && sortedArray(numArray) && repeatingArray(numArray)
}

function findPasswords(num = MIN, max = MAX) {
  const f = num => num > max ? false : [num, num + 1];
  const array = unfold(f, num);
  //console.log(array);
  return array.filter(num => checkDigits(num)).length;
}

console.log(findPasswords(359282, 820401));

module.exports = { findPasswords, checkDigits, repeatingArray, sortedArray }