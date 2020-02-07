const { expect } = require('chai');
const { executeCodes, replacePosition, getProgram } = require('../day-two-challenge/1202-program-alarm/getGravityAssistProgram');

describe('executeCodes', () => {
  it('returns correct array when encountering code 1', () => {
    expect(executeCodes([1, 1, 1, 4, 99, 5, 6, 0, 99])).to.eql([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  })

  it('returns correct array when encountering code 2', () => {
    expect(executeCodes([2, 4, 4, 5, 99, 0])).to.eql([2, 4, 4, 5, 99, 9801]);
  })
});

describe('replacePosition', () => {
  it('replaces the value at position 1 with 12, and the value at position 2 with 2', () => {
    expect(replacePosition([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).to.eql([0, 12, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
  })
});

describe('getProgram', () => {
  it('replaces position 1 with 12, then replaces the position 2 with 2, and then executes codes', () => {
    expect(replacePosition([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).to.eql([0, 12, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
  })
})