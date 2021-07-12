const {
  numberValues,
  stringValues,
  nullValues,
  undefinedValues
} = require('./01_primitives')

describe('Primitive data types', () => {
  it('In Javascript variables are assigned by reference', () => {
    const {
      javascriptLevelSkills,
      javascriptExpectedLevelSkills
    } = numberValues()

    expect(javascriptLevelSkills).toEqual(2)
    expect(javascriptExpectedLevelSkills).toEqual(5)
  })
  
  it('In Javascript strings can use single and double quotes', () => {
    const academyComment = stringValues()
    expect(academyComment).toEqual("Boolean Academia it's so cool!")
  })
  
  it('In Javascript null value represents a no-object tag', () => {
    const nullValue = nullValues()

    expect(nullValue).toBeNull()
  })

  it('In Javascript "undefined" represents a declared but not assigned variable', () => {
    const undefinedValue = undefinedValues()

    expect(undefinedValue).not.toBeDefined()
  })

})