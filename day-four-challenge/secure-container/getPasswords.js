const { map } = require('ramda');

//password is a six digit number
//two adjacent digits are the same
//going from left to right, the digits never decreases, only increase or stay the same
const MIN = 359282;
const MAX = 820401;

const sortedArray = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) return false;
  }
  return true;
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
  const stringNum = num.toString();
  let numStringArray = stringNum.split("");
  let numArray = map(parseInt, numStringArray);

  if (numArray.length === 6) {
    if (sortedArray(numArray) === true) {
      if (repeatingArray(numArray) === true) {
        return true;
      }
    }
  }
  return false;
}

const findPasswords = (min, max) => {
  let counter = 0;
  for (let i = min; i <= max; i++) {
    if (checkDigits(i) === true) {
      console.log(i);
      counter++;
    }
  }
  return counter;
}

console.log(findPasswords(MIN, MAX));
module.exports = { findPasswords }