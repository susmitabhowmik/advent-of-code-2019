const { sum, map } = require('ramda');
const massArray = require('./fuelData');

const findFuel = num => {
  return Math.floor(num / 3) - 2;
};

const currentFuel = (currentMass) =>
  findFuel(currentMass) <= 0 ? 0 : findFuel(currentMass) + currentFuel(findFuel(currentMass))


const totalFuel = array => {
  return sum(map(currentFuel, array));
};

console.log(totalFuel(massArray));

module.exports = { totalFuel, currentFuel, findFuel }