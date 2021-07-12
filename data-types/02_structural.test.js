const {
  objectValues,
  arrayValues 
} = require('./02_structural');

describe('Structural Values', () => {

  it('has same attributes modified when object it is assigned by reference', () => {
    const { teacherOne, teacherTwo } = objectValues()

    expect(teacherOne.name).toEqual(teacherTwo.name)
    expect(teacherOne.courseAssigned).toEqual(teacherTwo.courseAssigned)
  })

  it('has same attributes modified when array it is assigned by reference', () => {
    const { gradesStudentOne, gradesStudentTwo } = arrayValues()

    expect(gradesStudentOne).toEqual(gradesStudentTwo)
  })

})