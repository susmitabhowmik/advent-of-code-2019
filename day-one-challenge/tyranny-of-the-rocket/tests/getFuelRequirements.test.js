const { expect } = require('chai');
const totalfuel = require('../getFuelRequirements');

describe('totalfuel', () => {
  it('outputs the correct amount of fuel when given a single input', () => {
    expect(totalfuel([100756])).to.equal(50346);
  })

  it('outputs the correct amount of fuel when given multiple inputs', () => {
    expect(totalfuel([24, 37, 1009, 2056])).to.equal(1512);
  })

  it('treats negative fuel as zero', () => {
    expect(totalfuel[0]).to.equal(totalfuel[-6]);
  })
});
