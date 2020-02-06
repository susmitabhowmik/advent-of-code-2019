const { sum, map } = require('ramda');
const moduleMassArray = require('./fuelData');

const calculateFuel = mass => {
  return Math.floor(mass / 3) - 2;
};

const fuelOfCurrentModuleOfMass = (currentMass) => {
  if (typeof (currentMass) !== 'number')
    throw new TypeError("mass entered is not a number!");
  return calculateFuel(currentMass) <= 0 ? 0 : calculateFuel(currentMass) + fuelOfCurrentModuleOfMass(calculateFuel(currentMass));
}

const totalFuelForAllModulesOfMass = array => {
  return sum(map(fuelOfCurrentModuleOfMass, array));
};

console.log(totalFuelForAllModulesOfMass(moduleMassArray));

module.exports = { totalFuelForAllModulesOfMass, fuelOfCurrentModuleOfMass, calculateFuel }