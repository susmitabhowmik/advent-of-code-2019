const { expect } = require('chai');
const { totalFuel, findFuel, currentFuel } = require('../getFuelRequirements');

describe('totalFuel', () => {
  it('outputs the correct amount of fuel when given a single input', () => {
    expect(totalFuel([100756])).to.equal(50346);
  })

  it('outputs the correct amount of fuel when given multiple inputs', () => {
    expect(totalFuel([24, 37, 1009, 2056])).to.equal(1512);
  })

  it('treats negative fuel as zero', () => {
    expect(totalFuel([0])).to.equal(totalFuel([-6]));
  })
});

describe('findFuel', () => {
  it('takes a number, divides the number by 3, rounds down, and then subtract two', () => {
    expect(findFuel(100)).to.equal(31);
  })
})

describe('currentFuel', () => {
  it('treats fuel as though it has mass and performs math on fuel until fuel is less than or equal to 0, then returns sum of all fuel required for mass module', () => {
    expect(currentFuel(1969)).to.equal(966);
  })
})