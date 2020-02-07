const gravityAssistProgramArray = require('./gravityAssistProgramData.js');
const { pipe } = require('ramda');

//replace first index with 12
//replace position two with 2
const replacePosition = (array) => {
  array[1] = 12;
  array[2] = 2;
  return array;
}
const executeCodes = (array) => {
  let counter = 0;
  while (counter < array.length) {
    let secondPositionValue = array[counter + 1];
    let thirdPositionValue = array[counter + 2];
    let fourthPositionValue = array[counter + 3];
    if (array[counter] === 99) {
      //halt program if it is 99
      return array
    } else if (array[counter] === 1) {
      array[fourthPositionValue] = (array[secondPositionValue] + array[thirdPositionValue])
    } else if (array[counter] === 2) {
      array[fourthPositionValue] = (array[secondPositionValue] * array[thirdPositionValue]);
    }
    counter += 4;
  }
  //return array at the end
  return array;
}

const getProgram = (array) => (pipe(replacePosition, executeCodes)(array));

console.log(getProgram(gravityAssistProgramArray));

module.exports = { executeCodes, replacePosition, getProgram };
