const { sum, map } = require('ramda');
const massArray = require('./fuelData');

const findFuel = num => {
  return Math.floor(num / 3) - 2;
};

const currentFuel = currentMass => {
  let sumFuel = 0;

  while (findFuel(currentMass) > 0) {
    const mass = findFuel(currentMass);
    sumFuel += mass;
    currentMass = mass;
  }
  return sumFuel;
};

const totalFuel = array => {
  return sum(map(currentFuel, array));
};

console.log(totalFuel(massArray));

module.exports = totalFuel;