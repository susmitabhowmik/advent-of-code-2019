var StatsD = require("node-dogstatsd").StatsD;
var dogstatsd = new StatsD();

//Increment a counter.
dogstatsd.increment("page.views");

const {
  findPasswords,
} = require("./day-four-challenge/secure-container/getPasswords");
const {
  totalFuelForAllModulesOfMass,
} = require("./day-one-challenge/tyranny-of-the-rocket/getFuelRequirements");
const moduleMassArray = require("./day-one-challenge/tyranny-of-the-rocket/fuelData");

console.log(`Day one: ${totalFuelForAllModulesOfMass(moduleMassArray)}`);
console.log(`Day four: ${findPasswords()}`);
