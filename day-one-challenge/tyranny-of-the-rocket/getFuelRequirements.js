const { sum, map } = require('ramda');
const moduleMassArray = require('./fuelData');

const calculateFuel = mass => {
  return Math.floor(mass / 3) - 2;
};

const fuelOfCurrentModuleOfMass = (currentMass, runningTotalMass = 0) => {
  if ((typeof (currentMass) !== 'number') || isNaN(currentMass))
    throw new TypeError("mass entered is not a real number!");
  const fuelMass = calculateFuel(currentMass);
  return fuelMass <= 0 ? runningTotalMass : fuelOfCurrentModuleOfMass(fuelMass, runningTotalMass + fuelMass);
}

const totalFuelForAllModulesOfMass = array =>
  sum(map(fuelOfCurrentModuleOfMass, array));


console.log(totalFuelForAllModulesOfMass(moduleMassArray));

module.exports = { totalFuelForAllModulesOfMass, fuelOfCurrentModuleOfMass, calculateFuel }