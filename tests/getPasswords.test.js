const { expect } = require('chai');
const { digitsIncreaseOrStayTheSameFromLeftToRight, hasAtLeastTwoRepeatingDigits, meetsPasswordLengthRequirement, areAllRepeatingDigitsExactlyTwoDigitsLong, meetsPasswordRequirements, findPasswords } = require('../day-four-challenge/secure-container/getPasswords')

describe('findPasswords', () => {
  it('returns the number of possible passwords which can be created within a range', () => {
    const value = findPasswords(187324, 200000);
    expect(value).to.equal(2);
  }
  );
})

describe('meetsPasswordLengthRequirement', () => {
  it('returns true if an array of numbers has 6 digits', () => {
    expect(meetsPasswordLengthRequirement([2, 3, 4, 5, 7, 8])).to.be.true;
  })

  it('returns false if an array of numbers does not have 6 digits', () => {
    expect(meetsPasswordLengthRequirement([2, 3, 4, 7, 8])).to.be.false;
  })
})

describe('meetsPasswordRequirements', () => {
  it('checks to see if a number is greater than 6, has one repeating digit, and that the digits only increase or stay the same from left to right', () => {
    expect(meetsPasswordRequirements(122466)).to.be.true;
  }
  )

  it('returns false when given a number without repeating digits', () => {
    expect(meetsPasswordRequirements(123456)).to.be.false;
  }
  )

  it('returns false when given a number whose digits do not increase from left to right ', () => {
    expect(meetsPasswordRequirements(146623)).to.be.false;
  }
  )

  it('returns false when a number has greater than 6 digits', () => {
    expect(meetsPasswordRequirements(1234667)).to.be.false;
  }
  )

  it('returns false when a number does not contain at least one set of repeating digits which repeat exactly twice', () => {
    expect(meetsPasswordRequirements(4444666)).to.be.false;
  }
  )
})

describe('areAllRepeating', () => {
  it('returns true when given an array which has a repeating digit', () => {
    expect(hasAtLeastTwoRepeatingDigits([5, 5, 6, 3, 7, 8, 3])).to.be.true;
  }
  )

  it('returns false when given an array does not have a repeating digit', () => {
    expect(hasAtLeastTwoRepeatingDigits([5, 6, 9, 7, 8, 3])).to.be.false;
  }
  )
})

describe('sortedArray', () => {
  it('returns true if an array is sorted', () => {
    expect(digitsIncreaseOrStayTheSameFromLeftToRight([1, 2, 4, 6, 7, 8, 9])).to.be.true;
  })

  it('returns false if an array is not sorted', () => {
    expect(digitsIncreaseOrStayTheSameFromLeftToRight([1, 2, 12, 6, 7, 8, 9])).to.be.false;
  })
})

describe('areAllRepeatingDigitsExactlyTwoDigitsLong', () => {
  it('returns true if all repeating digits are exactly two digits long', () => {
    expect(areAllRepeatingDigitsExactlyTwoDigitsLong([1, 2, 3, 4, 4, 8])).to.be.true
  })

  it('returns false if no repeating digits are exactly two digits long', () => {
    expect(areAllRepeatingDigitsExactlyTwoDigitsLong([1, 2, 3, 4, 4, 4])).to.be.false
  })
})