const { sum, map } = require('ramda');
const massArray = require('./fuelData');

const findFuel = num => {
  return Math.floor(num / 3) - 2;
};

const currentFuel = (currentMass) => {
  const fuel = findFuel(currentMass);
  return (fuel <= 0 ? 0 : fuel + currentFuel(fuel));
}

const totalFuel = array => {
  return sum(map(currentFuel, array));
};

console.log(totalFuel(massArray));

module.exports = totalFuel;