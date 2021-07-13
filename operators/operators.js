function rutTointeger(rutString) {
  //==================================
  //  -------------
  //  👀 Desafío 👀
  //  Todos odiamos las expresiones regulares
  //  -------------
  //  Utilizar replace con expresión regular /\./g
  //  y reemplazar con un string vacío
  //  
  //  Más avanzado: Otra opción sería utilizar /\.|\-[0-9k]/gi
  //  esto último es más correcto, pero ¿es necesario?
  //  más adelante aprenderemos lo importante que son las pruebas para definir
  //  cuanto debemos "sobre-pensar" los casos posibles y como debería
  //  ser el proceso cuando encontramos errores en producción y queremos replicarlos
  //  con pruebas de software
  //==================================
  return parseInt(rutString.replace(/\./g,'')) 
}

function latitudeToFloat(latitude){
  return parseFloat(latitude)
}

function isNumber(num){
  // return typeof(num) === 'number'
  return typeof(num) === 'number' && !isNaN(num)
}
module.exports = {
  isNumber: isNumber,
  rutTointeger: rutTointeger,
  latitudeToFloat: latitudeToFloat
}
