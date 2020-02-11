const { expect } = require('chai');
const { findPasswords, checkDigits, repeatingArray, sortedArray } = require('../day-four-challenge/secure-container/getPasswords')

describe('findPasswords', () => {
  it('takes in a range of passwords, and returns the possible ', () => {
    expect(findPasswords(123456, 123470)).to.equal(1);
  }
  )
})

describe('checkDigits', () => {
  it('takes in a range of a number and checks to see if the number is greater than 6, has one repeating digit, and that the digits only increase or stay the same from left to right', () => {
    expect(checkDigits(123466)).to.equal(true);
  }
  )

  it('returns false when given a number without repeating digits', () => {
    expect(checkDigits(123456)).to.equal(false);
  }
  )

  it('returns false when given a number whose digits do not increase from left to right ', () => {
    expect(checkDigits(146623)).to.equal(false);
  }
  )

  it('returns false when a number has greater than 6 digits', () => {
    expect(checkDigits(1234667)).to.equal(false);
  }
  )
})

describe('repeatingArray', () => {
  it('returns true when given an array which has a repeating digit', () => {
    expect(repeatingArray([5, 5, 6, 3, 7, 8, 3])).to.equal(true);
  }
  )

  it('returns false when given an array does not have a repeating digit', () => {
    expect(repeatingArray([5, 6, 9, 7, 8, 3])).to.equal(false);
  }
  )
})

describe('sortedArray', () => {
  it('returns true if an array is sorted', () => {
    expect(sortedArray([1, 2, 4, 6, 7, 8, 9])).to.equal(true);
  })

  it('returns false if an array is not sorted', () => {
    expect(sortedArray([1, 2, 12, 6, 7, 8, 9])).to.equal(false);
  })
})