const { map, sort, not, uniq, allPass, join, replace, range, subtract } = require('ramda');

const MIN = 359282;
const MAX = 820401;
const PASSWORD_LENGTH = 6;

const digitsIncreaseOrStayTheSameFromLeftToRight = array => (
  sort((a, b) => subtract(a, b), array).toString() === array.toString());

const hasAtLeastTwoRepeatingDigits = (array) => (not(uniq(array).toString() === array.toString()));

const meetsPasswordLengthRequirement = (array) => array.length === PASSWORD_LENGTH;

const arrayToString = (array) => join('', array);

/** 
 * Removes all digits which repeat more than twice within the range of 0-9
 * @param {String} string 
 * @returns {String} 
 * @example
 * // returns '884'
 * removeDigitsRepeatingMoreThanTwice('7777884');
 */
const removeDigitsRepeatingMoreThanTwice = (string) => (replace(new RegExp('0{3,}|1{3,}|2{3,}|3{3,}|4{3,}|5{3,}|6{3,}|7{3,}|8{3,}|9{3,}', 'g'), '', string))

/** 
 * Determines if all the repeating digits in a number repeat only twice by removing digits which repeat more than twice and then checking to see if it number still contains any repeating digits
 * @param {Array.Number} array Array containing the digits in a given number
 * @returns {Boolean}
 */
const areAllRepeatingDigitsExactlyTwoDigitsLong = (array) => (hasAtLeastTwoRepeatingDigits(map(parseInt, removeDigitsRepeatingMoreThanTwice(arrayToString(array)))));

const testPassWordRequirements = (array) = allPass([meetsPasswordLengthRequirement, digitsIncreaseOrStayTheSameFromLeftToRight, areAllRepeatingDigitsExactlyTwoDigitsLong]);

/** 
 * When given a number, returns an array of digits in that number
 * @param {Number} num 
 * @returns {Array.Number}
 */
const createNumArray = (num) => (num.toString().split('').map(Number));

const meetsPasswordRequirements = (num) => testPassWordRequirements(createNumArray(num));

/**
 * Takes in a range and returns how many passwords are we are able to create within that range
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number} - the number of possible passwords
 */
const findPasswords = (min = MIN, max = MAX) => (range(min, max).filter(meetsPasswordRequirements).length);

module.exports = { digitsIncreaseOrStayTheSameFromLeftToRight, hasAtLeastTwoRepeatingDigits, meetsPasswordLengthRequirement, areAllRepeatingDigitsExactlyTwoDigitsLong, createNumArray, meetsPasswordRequirements, findPasswords };
