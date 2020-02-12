const { map, sort, not, uniq, equals, unfold } = require('ramda');

const MIN = 359282;
const MAX = 820401;
const PASSWORD_MIN_LENGTH = 6;

const diff = (a, b) => { return a - b };

const digitsIncreaseOrStayTheSameFromLeftToRight = array => (
  equals(sort(diff, array), array)
);

const hasAtLeastTwoRepeatingDigits = (array) => (not(equals(uniq(array), array)))

const isASixDigitNumber = (array) => array.length === PASSWORD_MIN_LENGTH;

const meetsPasswordRequirements = (num) => {
  const numStringArray = num.toString().split('');
  const numArray = map(parseInt, numStringArray);

  return isASixDigitNumber(numArray) && digitsIncreaseOrStayTheSameFromLeftToRight(numArray) && hasAtLeastTwoRepeatingDigits(numArray)
}

function findPasswords(num = MIN, max = MAX) {
  const f = num => num > max ? false : [num, num + 1];
  const array = unfold(f, num);
  //console.log(array);
  return array.filter(num => meetsPasswordRequirements(num)).length;
}

console.log(findPasswords(359282, 820401));

module.exports = { findPasswords, meetsPasswordRequirements, isASixDigitNumber, digitsIncreaseOrStayTheSameFromLeftToRight, hasAtLeastTwoRepeatingDigits }