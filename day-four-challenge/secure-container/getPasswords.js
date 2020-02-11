const { map, sort } = require('ramda');

const diff = (a, b) => { return a - b };

const sortedArray = array => {
  return sort(diff, array).toString() === array.toString() ? true : false
}


const repeatingArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return true;
    }
  }
  return false;
}


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