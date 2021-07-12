function isAdult(age){
  // return age >= 18
}

function isChild(age){
  var result
  result = age < 13
  
  return result
}

function isTeenager(age){
  var result

  result = age >= 13 && age < 18
  return result
}

function isAbsoluteZero(temperature){
  // return temperature === -273
  // return temperature == '-273'
  return temperature === '-273'
}

module.exports = {
  isAdult: isAdult,
  isChild: isChild,
  isTeenager: isTeenager,
  isAbsoluteZero: isAbsoluteZero
}