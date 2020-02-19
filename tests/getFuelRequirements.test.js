const { expect } = require('chai');
const { totalFuelForAllModulesOfMass, calculateFuel, fuelOfCurrentModuleOfMass } = require('../day-one-challenge/tyranny-of-the-rocket/getFuelRequirements');

describe('totalFuelForAllModulesOfMass', () => {
  it('outputs the correct amount of fuel when given a single input', () => {
    expect(totalFuelForAllModulesOfMass([100756])).to.equal(50346);
  })

  it('outputs the correct amount of fuel when given multiple inputs', () => {
    expect(totalFuelForAllModulesOfMass([24, 37, 1009, 2056])).to.equal(1512);
  })

  it('treats negative fuel as zero', () => {
    expect(totalFuelForAllModulesOfMass([0])).to.equal(totalFuelForAllModulesOfMass([-6]));
  })
});

describe('calculateFuel', () => {
  it('takes a number, divides the number by 3, rounds down, and then subtract two', () => {
    expect(calculateFuel(100)).to.equal(31);
  })
})

describe('fuelOfCurrentModuleOfMass', () => {
  it('treats fuel as though it has mass and performs math on fuel until fuel is less than or equal to 0, then returns sum of all fuel required for mass module', () => {
    expect(fuelOfCurrentModuleOfMass(1969)).to.equal(966);
  })

  it('throws an error if mass entered is a string', () => {
    expect(() => fuelOfCurrentModuleOfMass('fourteen')).to.throw('mass entered is not a real number!');
  })

  it('throws an error if mass entered is NaN', () => {
    expect(() => fuelOfCurrentModuleOfMass(parseInt('fourteen'))).to.throw('mass entered is not a real number!');
  })
})
