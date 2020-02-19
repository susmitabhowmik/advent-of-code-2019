const { map, sort, not, uniq, equals, allPass, pipe, join, replace, range } = require('ramda');

const MIN = 359282;
const MAX = 820401;
const PASSWORD_LENGTH = 6;

/**
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number} 
 */
const diff = (a, b) => { return a - b };

/** 
 * @param {Array.Number} array 
 * @returns {Boolean}
 */
const digitsIncreaseOrStayTheSameFromLeftToRight = array => (
  equals(sort(diff, array), array)
);

/** 
 * @param {Array.Number} array 
 * @returns {Boolean}
 */
const hasAtLeastTwoRepeatingDigits = (array) => (not(equals(uniq(array), array)));

/**
 * @param {Array.Number} array
 * @returns {Number} 
 */
const isASixDigitNumber = (array) => array.length === PASSWORD_LENGTH;

/**
 * @param {Array.Number} array 
 * @returns {String}
 */
const arrayToString = (array) => join('', array);

/** 
 * @param {String} string 
 * @returns {String}
 */
const removeDigitsRepeatingMoreThanTwice = (string) => {
  const regex = new RegExp('0{3,}|1{3,}|2{3,}|3{3,}|4{3,}|5{3,}|6{3,}|7{3,}|8{3,}|9{3,}', 'g');
  return replace(regex, '', string) //'7777884 => '884'
}

/**
 * @param {Array.Number} array 
 * @returns {Boolean}
 */
const areAllRepeatingDigitsExactlyTwoDigitsLong = (array) => {
  const newNumAsString = removeDigitsRepeatingMoreThanTwice(arrayToString(array))
  const newNum = map(parseInt, newNumAsString);
  return hasAtLeastTwoRepeatingDigits(newNum);
}

/**
 * @param {Array.Number} array
 * @returns {Boolean}
 */
const testPassWordRequirements = (array) = allPass([isASixDigitNumber, digitsIncreaseOrStayTheSameFromLeftToRight, areAllRepeatingDigitsExactlyTwoDigitsLong]);

/**
 * @param {Number} num 
 * @returns {Array.Number}
 */
const createNumArray = (num) => {
  const numStringArray = num.toString().split('');
  return map(parseInt, numStringArray);
}

/**
 * @param {Number} num 
 * @returns {Boolean}
 */
const meetsPasswordRequirements = (num) => {
  return pipe(createNumArray, testPassWordRequirements)(num);
}

/**
 * @param {Number} num 
 * @param {Number} max 
 * @returns {Boolean}
 */
function findPasswords(min = MIN, max = MAX) {
  const array = range(min, max);
  return array.filter(num => meetsPasswordRequirements(num)).length;
}

module.exports = { digitsIncreaseOrStayTheSameFromLeftToRight, hasAtLeastTwoRepeatingDigits, isASixDigitNumber, areAllRepeatingDigitsExactlyTwoDigitsLong, createNumArray, meetsPasswordRequirements, findPasswords };


