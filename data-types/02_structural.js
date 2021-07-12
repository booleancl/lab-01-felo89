function objectValues() {
  /* 
  
  */
  
  var teacherOne = {
    name: 'Sebastian',
    courseAssigned: 'NodeJS fundamentals'
  }
  var teacherTwo = {
    name: 'Sebastian',
    courseAssigned: 'Git fundamentals'
  }
  // teacherOne = teacherTwo 

  teacherTwo.name = 'Gonzalo'
  teacherTwo.courseAssigned = 'Functions Arquitecture'

  return { 
    teacherOne: teacherOne,
    teacherTwo: teacherTwo
  }
}

function arrayValues(){
  var gradesStudentOne = [5,7,6]
  var gradesStudentTwo = [4,5,6]

  // gradesStudentOne = gradesStudentTwo

  gradesStudentTwo[1] = 7

  return {
    gradesStudentOne: gradesStudentOne,
    gradesStudentTwo: gradesStudentTwo
  }
}

module.exports = {
  objectValues: objectValues,
  arrayValues: arrayValues
}