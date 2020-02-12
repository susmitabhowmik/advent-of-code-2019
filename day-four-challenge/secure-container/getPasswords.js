const { map, sort, not, uniq, equals, unfold, reduceWhile, add } = require('ramda');

const MIN = 359282;
const MAX = 820401;

const diff = (a, b) => { return a - b };

const sortedArray = array => (
  equals(sort(diff, array), array) ? true : false
);


const repeatingArray = (array) => (not(equals(uniq(array), array)))

const checkDigits = (num) => {
  const numStringArray = num.toString().split('');
  const numArray = map(parseInt, numStringArray);

  return numArray.length === 6 && sortedArray(numArray) && repeatingArray(numArray) ? true : false
}

function findPasswords(num, max) {
  const f = num => num > max ? false : [num, num + 1];
  const array = unfold(f, num);
  return array.filter(num => checkDigits(num)).length;
}

console.log(findPasswords(359282, 820401));

module.exports = { findPasswords, checkDigits, repeatingArray, sortedArray }