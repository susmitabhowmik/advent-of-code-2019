const { sum, map } = require('ramda');
const massArray = require('./fuelData');

const findFuel = num => {
  return Math.floor(num / 3) - 2;
};

const currentFuel = currentMass => {
  let fuel = 0;

  while (findFuel(currentMass) > 0) {
    fuel += findFuel(currentMass);
    currentMass = findFuel(currentMass);
  }

  return fuel;
};

const totalFuel = array => {
  return sum(map(currentFuel, array));
};

console.log(totalFuel(massArray));

module.exports = totalFuel;