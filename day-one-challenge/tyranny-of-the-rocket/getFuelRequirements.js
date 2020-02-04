const { sum } = require('ramda');
const massArray = require('./fuelData');
//individually calculate the fuel needed for each mass of each module
//to calculate the individual fuel requirements divide the mass by 3, then round down, and subtract 2
//then sum together all the fuel requirements 
//each fuel also requires it's own fuel

const findfuel = num => {
  return Math.floor(num / 3) - 2;
};

const totalfuel = array => {
  let fuelArray = [];

  for (let index = 0; index < array.length; index++) {
    let currentMass = array[index];
    let totalfuel = 0;

    while (findfuel(currentMass) > 0) {
      totalfuel += findfuel(currentMass);
      currentMass = findfuel(currentMass);
    }
    fuelArray.push(totalfuel);
  }

  return sum(fuelArray);
};

console.log(totalfuel(massArray));

module.exports = totalfuel;