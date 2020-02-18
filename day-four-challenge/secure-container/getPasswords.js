const { map, sort, not, uniq, equals, unfold, allPass, pipe, join } = require('ramda');

const MIN = 359282;
const MAX = 820401;
const PASSWORD_MIN_LENGTH = 6;

const diff = (a, b) => { return a - b };

const digitsIncreaseOrStayTheSameFromLeftToRight = array => (
  equals(sort(diff, array), array)
);

const hasAtLeastTwoRepeatingDigits = (array) => (not(equals(uniq(array), array)));

const isASixDigitNumber = (array) => array.length === PASSWORD_MIN_LENGTH;

const removeDigitsWhichRepeatMoreThanTwice = (array) => {
  let newNumAsString = join('', array);
  for (let i = 0; i < newNumAsString.length; i++) {
    const regex = new RegExp(`${newNumAsString[i]}{3,}`);
    newNumAsString = newNumAsString.replace(regex, '')
  }
  let newNum = map(parseInt, newNumAsString);
  return hasAtLeastTwoRepeatingDigits(newNum);
}

const testPassWordRequirements = (array) = allPass([isASixDigitNumber, digitsIncreaseOrStayTheSameFromLeftToRight, hasAtLeastTwoRepeatingDigits, removeDigitsWhichRepeatMoreThanTwice]);

const createNumArray = (num) => {
  const numStringArray = num.toString().split('');
  return map(parseInt, numStringArray);
}


const meetsPasswordRequirements = (num) => {
  return pipe(createNumArray, testPassWordRequirements)(num);
}

//takes in a range of numbers and unfolds them into an array of numbers within the range, checks to see if each password matches the requirement and then returns length of array
function findPasswords(num = MIN, max = MAX) {
  const f = num => num > max ? false : [num, num + 1];
  const array = unfold(f, num);
  console.log(array.filter(num => meetsPasswordRequirements(num)));
  return array.filter(num => meetsPasswordRequirements(num)).length;
}

module.exports = { findPasswords, meetsPasswordRequirements, isASixDigitNumber, digitsIncreaseOrStayTheSameFromLeftToRight, hasAtLeastTwoRepeatingDigits, removeDigitsWhichRepeatMoreThanTwice };
