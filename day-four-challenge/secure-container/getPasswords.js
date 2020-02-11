const { map, sort, not, uniq, equals } = require('ramda');

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

const findPasswords = (min, max) => {
  let counter = 0;
  for (let i = min; i <= max; i++) {
    if (checkDigits(i) === true) {
      counter++;
    }
  }
  return counter;
}

module.exports = { findPasswords, checkDigits, repeatingArray, sortedArray }