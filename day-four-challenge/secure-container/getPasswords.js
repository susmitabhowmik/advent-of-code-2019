const { map } = require('ramda');

//password is a six digit number
//two adjacent digits are the same
//going from left to right, the digits never decreases, only increase or stay the same
const MIN = 359282;
const MAX = 820401;
let counter = 0;

const numLength = num => {
  const stringNum = num.toString();
  return stringNum.length;
}

const numRepeats = (num) => {
  const stringNum = num.toString();
  let numStringArray = stringNum.split("");
  let numArray = map(parseInt, numStringArray);
  for (let i = 0; i <= numArray.length; i++) {
    let element = numArray[i];
    for (let j = i + 1; j <= numArray.length; j++) {
      if (element === numArray[j]) return true
    }
  }
  return false;
}

module.exports = { numLength, numRepeats }