const { expect } = require('chai');
const { findPasswords } = require('../day-four-challenge/secure-container/getPasswords')

describe('findPasswords', () => {
  it('takes in a range of passwords, and returns the possible ', () => {
    expect(findPasswords(123456, 123470)).to.equal(1);
  }
  )
})