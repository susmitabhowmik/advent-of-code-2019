const { map, sort, not, uniq, allPass, pipe, join, replace, range, subtract } = require('ramda');

const MIN = 359282;
const MAX = 820401;
const PASSWORD_LENGTH = 6;

/** 
 * @param {Array.Number} array 
 * @returns {Boolean}
 */
const digitsIncreaseOrStayTheSameFromLeftToRight = array => (
  sort((a, b) => subtract(a, b), array).toString() === array.toString());

/** 
 * @param {Array.Number} array 
 * @returns {Boolean}
 */
const hasAtLeastTwoRepeatingDigits = (array) => (not(uniq(array).toString() === array.toString()));

/**
 * @param {Array.Number} array
 * @returns {Number} 
 */
const meetsPasswordLengthRequirement = (array) => array.length === PASSWORD_LENGTH;

/**
 * @param {Array.Number} array 
 * @returns {String}
 */
const arrayToString = (array) => join('', array);

/** 
 * @param {String} string 
 * @returns {String}
 */
const removeDigitsRepeatingMoreThanTwice = (string) => (replace(new RegExp('0{3,}|1{3,}|2{3,}|3{3,}|4{3,}|5{3,}|6{3,}|7{3,}|8{3,}|9{3,}', 'g'), '', string)) //'7777884' => '884'

/**
 * @param {Array.Number} array 
 * @returns {Boolean}
 */
const areAllRepeatingDigitsExactlyTwoDigitsLong = (array) => (hasAtLeastTwoRepeatingDigits(map(parseInt, removeDigitsRepeatingMoreThanTwice(arrayToString(array)))));

/**
 * @param {Array.Number} array
 * @returns {Boolean}
 */
const testPassWordRequirements = (array) = allPass([meetsPasswordLengthRequirement, digitsIncreaseOrStayTheSameFromLeftToRight, areAllRepeatingDigitsExactlyTwoDigitsLong]);

/**
 * @param {Number} num 
 * @returns {Array.Number}
 */
const createNumArray = (num) => (num.toString().split('').map(Number)); //124 => [1,2,4]

/**
 * @param {Number} num 
 * @returns {Boolean}
 */
const meetsPasswordRequirements = (num) => pipe(createNumArray, testPassWordRequirements)(num);

/**
 * @param {Number} num 
 * @param {Number} max 
 * @returns {Number}
 */
const findPasswords = (min = MIN, max = MAX) => (range(min, max).filter(num => meetsPasswordRequirements(num)).length);

module.exports = { digitsIncreaseOrStayTheSameFromLeftToRight, hasAtLeastTwoRepeatingDigits, meetsPasswordLengthRequirement, areAllRepeatingDigitsExactlyTwoDigitsLong, createNumArray, meetsPasswordRequirements, findPasswords };
