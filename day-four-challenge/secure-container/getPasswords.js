const { map, sort, not, uniq, equals, unfold, allPass, pipe } = require('ramda');

const MIN = 359282;
const MAX = 820401;
const PASSWORD_MIN_LENGTH = 6;

const diff = (a, b) => { return a - b };

const digitsIncreaseOrStayTheSameFromLeftToRight = array => (
  equals(sort(diff, array), array)
);

const hasAtLeastTwoRepeatingDigits = (array) => (not(equals(uniq(array), array)));

const isASixDigitNumber = (array) => array.length === PASSWORD_MIN_LENGTH;

const testPassWordRequirements = (array) = allPass([isASixDigitNumber, digitsIncreaseOrStayTheSameFromLeftToRight, hasAtLeastTwoRepeatingDigits]);

const createNumArray = (num) => {
  const numStringArray = num.toString().split('');
  return map(parseInt, numStringArray);
}

const meetsPasswordRequirements = (num) => {
  return pipe(createNumArray, testPassWordRequirements)(num);
}

function findPasswords(num = MIN, max = MAX) {
  const f = num => num > max ? false : [num, num + 1];
  const array = unfold(f, num);
  return array.filter(num => meetsPasswordRequirements(num)).length;
}

console.log(findPasswords(359282, 820401));

module.exports = { findPasswords, meetsPasswordRequirements, isASixDigitNumber, digitsIncreaseOrStayTheSameFromLeftToRight, hasAtLeastTwoRepeatingDigits };
