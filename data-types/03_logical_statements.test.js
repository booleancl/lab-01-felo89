const {
  isAdult,
  isChild,
  isTeenager,
  isAbsoluteZero 
} = require('./03_logical_statements');

describe('Logical Statements', () => {

  it('returns a boolean value', () => {
    expect(isAdult(5)).toBe(false)
    expect(isAdult(30)).toBe(true)
  })

  it('returns a boolean value', () => {
    expect(isChild(5)).toBe(true)
    expect(isChild(30)).toBe(false)
  })

  it('returns a boolean value', () => {
    expect(isTeenager(5)).toBe(false)
    expect(isTeenager(15)).toBe(true)
  })

  it('returns a boolean value', () => {
    expect(isAbsoluteZero(-273)).toBe(true)
    expect(isAbsoluteZero(273)).toBe(false)
  })

})