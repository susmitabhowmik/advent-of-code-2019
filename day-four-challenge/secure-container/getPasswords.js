const { map, sort, not, uniq, equals, unfold, allPass, pipe, join } = require('ramda');

const MIN = 359282;
const MAX = 820401;
const PASSWORD_LENGTH = 6;

//returns difference of two numbers
const diff = (a, b) => { return a - b };

//returns true or false based on if digits increase or stay the same from left to right
const digitsIncreaseOrStayTheSameFromLeftToRight = array => (
  equals(sort(diff, array), array)
);

//returns true or false based on if an array contains at least two repeating digits
const hasAtLeastTwoRepeatingDigits = (array) => (not(equals(uniq(array), array)));

//returns true or false based on if an array has a length of 6 
const isASixDigitNumber = (array) => array.length === PASSWORD_LENGTH;

//determines if all repeating digits are exactly two digits long
const areAllRepeatingDigitsExactlyTwoDigitsLong = (array) => {
  let newNumAsString = join('', array);
  for (let i = 0; i < newNumAsString.length; i++) {
    const regex = new RegExp(`${newNumAsString[i]}{3,}`);
    newNumAsString = newNumAsString.replace(regex, '')
  }
  let newNum = map(parseInt, newNumAsString);
  return hasAtLeastTwoRepeatingDigits(newNum);
}

//return boolean based on password requirements to test that the number is exactly six digits, digits increase from left to right, and all repeating digits are exactly two digits long
const testPassWordRequirements = (array) = allPass([isASixDigitNumber, digitsIncreaseOrStayTheSameFromLeftToRight, areAllRepeatingDigitsExactlyTwoDigitsLong]);

//take in a number and output an array containing all the digits in the number
const createNumArray = (num) => {
  const numStringArray = num.toString().split('');
  return map(parseInt, numStringArray);
}

//return boolean based on if number passes all password requirements
const meetsPasswordRequirements = (num) => {
  return pipe(createNumArray, testPassWordRequirements)(num);
}

//takes in a range of numbers and unfolds them into an array of numbers within the range, checks to see if each password matches the requirement and then returns length of array
function findPasswords(num = MIN, max = MAX) {
  const f = num => num > max ? false : [num, num + 1];
  const array = unfold(f, num);
  return array.filter(num => meetsPasswordRequirements(num)).length;
}

module.exports = { digitsIncreaseOrStayTheSameFromLeftToRight,hasAtLeastTwoRepeatingDigits, isASixDigitNumber, areAllRepeatingDigitsExactlyTwoDigitsLong, createNumArray, meetsPasswordRequirements, findPasswords };


