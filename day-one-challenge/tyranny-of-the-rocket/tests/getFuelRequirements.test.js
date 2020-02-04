const { expect } = require('chai');
const totalFuel = require('../getFuelRequirements');

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
