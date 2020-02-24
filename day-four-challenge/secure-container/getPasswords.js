const { map, sort, not, uniq, allPass, join, replace, range, subtract } = require('ramda');

const MIN = 359282;
const MAX = 820401;
const PASSWORD_LENGTH = 6;

/** Determines if an array is sorted
 * @param {Array.Number} array 
 * @returns {Boolean}
 */
const digitsIncreaseOrStayTheSameFromLeftToRight = array => (
  sort((a, b) => subtract(a, b), array).toString() === array.toString());

/** Determines if an array has at least two repeating digits by teesting that it is not unique
 * @param {Array.Number} array 
 * @returns {Boolean}
 */
const hasAtLeastTwoRepeatingDigits = (array) => (not(uniq(array).toString() === array.toString()));

/** Determines if an array meets the length requirement for a given password
 * @param {Array.Number} array
 * @returns {Boolean} 
 */
const meetsPasswordLengthRequirement = (array) => array.length === PASSWORD_LENGTH;

/** Joins an array into a string
 * @param {Array.Number} array 
 * @returns {String}
 */
const arrayToString = (array) => join('', array);

/** Removes all digits which repeat more than twice within the range of 0-9
 * @param {String} string 
 * @returns {String}
 */
const removeDigitsRepeatingMoreThanTwice = (string) => (replace(new RegExp('0{3,}|1{3,}|2{3,}|3{3,}|4{3,}|5{3,}|6{3,}|7{3,}|8{3,}|9{3,}', 'g'), '', string)) //'7777884' => '884'

/** Determines if all the repeating digits in a number repeat only twice by removing digits which repeat more than twice and then checking to see if it number still contains any repeating digits
 * @param {Array.Number} array Array containing the digits in a given number
 * @returns {Boolean}
 */
const areAllRepeatingDigitsExactlyTwoDigitsLong = (array) => (hasAtLeastTwoRepeatingDigits(map(parseInt, removeDigitsRepeatingMoreThanTwice(arrayToString(array)))));

/** Determines if a number passes all the requirements for a password
 * @param {Array.Number} array Array containing the digits in a given number
 * @returns {Boolean}
 */
const testPassWordRequirements = (array) = allPass([meetsPasswordLengthRequirement, digitsIncreaseOrStayTheSameFromLeftToRight, areAllRepeatingDigitsExactlyTwoDigitsLong]);

/** When given a number, returns an array of digits in that number
 * @param {Number} num 
 * @returns {Array.Number}
 */
const createNumArray = (num) => (num.toString().split('').map(Number)); //124 => [1,2,4]

/** Creates an array out of the digits of a given number and determines if that number passes all the password requirements 
 * @param {Number} num 
 * @returns {Boolean}
 */
const meetsPasswordRequirements = (num) => testPassWordRequirements(createNumArray(num));

/** Takes in a range and returns how many passwords are we are able to create within that range
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
const findPasswords = (min = MIN, max = MAX) => (range(min, max).filter(num => meetsPasswordRequirements(num)).length);

module.exports = { digitsIncreaseOrStayTheSameFromLeftToRight, hasAtLeastTwoRepeatingDigits, meetsPasswordLengthRequirement, areAllRepeatingDigitsExactlyTwoDigitsLong, createNumArray, meetsPasswordRequirements, findPasswords };
