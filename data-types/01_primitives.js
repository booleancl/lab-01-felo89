/* 
Hola! Muy bienvenidos al primer laboratorio del módulo de repaso de Javascript.

Las siguientes funciones no están muy bien, algunas están incompletas y otras derechamente malas.
Afortunadamente las funciones se pueden probar automáticamente con el comando 'npm test nombre-carpeta/nombre-archivo.test.js'
Este comando dejará un programa corriendo que ejecutará las pruebas cada vez que se guarde un cambio en el archivo.

Los objetivos de este laboratorio son:

  - Tener un repaso de los fundamentos de Javascript en cuanto a los tipos de datos 'primitivos' y algunos operadores (veremos más operadores cuando experimentemos con tipos de datos más elaborados como arreglos, funciones y objetos)
  - Familiarizarse desde temprano con las pruebas automatizadas.

En estos experimentos debemos:

  1) Observar y leer atentamente la salida de la consola o terminal.
  2) CONVERSAR con el EQUIPO acerca de qué es lo que podría estar mal. 
  3) En conjunto con el Equipo, identificar el archivo y la línea del archivo que podría tener el problema.
  4) Experimentar haciendo UN cambio a la vez, probar y repetir esta receta hasta que tengamos una conclusión razonable que nos permita construir conocimiento que nos sirva para el futuro. 

Es muy importante, como en todo experimento, hacer UN SOLO cambio a la vez. Esto nos permitirá hacer conclusiones sin que otros factores puedan estar afectando nuestro raciocinio.

Para el primer ejemplo ejecuta en la terminal el siguiente comando:

`npm test data-types/01_primitives.test.js`

Esto ejecutará las pruebas automáticas y quedará esperando por cambios en el archivo con las funciones, en este caso el 01_primitives.js. Cada archivo tiene viene con sus pruebas, un archivo con el mismo nombre pero con el sufijo '.test'. No es necesario que por ahora estudies esos archivos, en los siguientes módulos veremos cómo hacer estas pruebas, por ahora solo necesitamos trabajar con la terminal y el archivo sin sufijo. Una vez realizados los experimentos del primer archivo debemos hacer lo mismo con el siguiente.

Para dejar de ejecutar las pruebas presiona la tecla 'Q'

Notas: 
  - Seguiremos javascript standard style por lo que no agregaremos ';' al final de cada sentencia.
  - Solo usaremos ES5 durante estos módulos, en los siguientes usaremos ES6+
  - Queremos que ustedes sean desarrolladores estrella de clase mundial (no confundir con RockStars), por lo que todo lo que sea código lo escribiremos en inglés (nombres de variables y métodos). Si tienes dificultades con el idioma inglés, no te aflijas, programar es una excelente forma de interiorizar mucho del idioma inglés y tenemos a la mano traductores muy poderosos. Además te ayudará a asimilar más rápidos las nuevas herramientas, frameworks y librerías ya que prácticamente el 100% de la documentación esta en inglés.
*/

function numberValues() {
  /* 
  ¿Funcionará si asignamos así?:
  
    var javascriptLevelSkills = 1,
        javascriptExpectedLevelSkills = 2

    var javascriptLevelSkills, javascriptExpectedLevelSkills = 1, 2

    var javascriptLevelSkills, javascriptExpectedLevelSkills = 1 # => ¿Qué tipo de dato será javascriptLevelSkills?
  */

  var javascriptLevelSkills = 1
  var javascriptExpectedLevelSkills = 2

  // javascriptLevelSkills = javascriptExpectedLevelSkills 

  javascriptExpectedLevelSkills = 5

  return {
    javascriptLevelSkills: javascriptLevelSkills,
    javascriptExpectedLevelSkills: javascriptExpectedLevelSkills
  }
}

function stringValues() {
  /*
  Experimenta con diferentes formas de pasar
  las pruebas
  */
  
  var academyComment
 
  // academyComment = 'Boolean Academia it's so cool!'
  // academyComment = "Boolean Academia it's so cool!"   

  /*
  // Suma de Strings 
  var academyName = 'Boolean Academia'
  var comment = "it's so cool!"
  academyComment = academyName + comment
  */
  
  /*
  // Interpolación de Strings
  var academyName = 'Boolean Academia {{ comment }}'
  var comment = "it's so cool!"
  academyComment = academyName.replace('{{ comment }}', "it's so cool!")
  */

  /*
  // Manipulación de Strings
  var academyName = 'boolean Academia'
  var comment = " it's so cool!"
  academyComment = academyName[0].toUpperCase()
    + academyName.substring(1)
    + comment  
  */

  /*   
  var academyName = 'boolean academia'
  var comment = "it's so cool!"

  academyComment = academyName.charAt(0).toUpperCase()
    + academyName.substring(1, 8)
    + academyName.charAt(8).toUpperCase()
    + academyName.substring(9)
    + ' '
    + comment  
  */

  return academyComment
}

function nullValues() {

  /*
    Utilizaremos null para identificar como un objeto
    que aún no definiremos, de esta forma cada vez que corroboremos
    el valor null sabremos que esta variable fue creada con este objetivo.

    Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null#description

    Ejemplo:

    if (courseModules !== null) { // <--asumimos que courseModules es un objeto
      // Como ya sabemos que courseModules será un objeto, podemos de forma segura
      // manipular sus eventuales propiedades
      course.modules.modules[0].class[0] = 'Tipos de datos y operadores'
    } else {
      // El objeto aún no hay sido asignado
      alert('Curso no esta disponible en este momento. Contacte al administrador')
    }
  */
  var courseModules

  /*
  //  ¿En este punto que valor tiene courseModules?
  courseModules = null
  */

  return courseModules
}

function undefinedValues() {

  /*
  // ¿ Por qué se arroja una error "ReferenceError: studentAssigments is not defined" ?
  var studentAssigments
  */

  /*
  // Si intentamos acceder a una llave no definida en un objeto
  var courseModules = {}
  var studentAssigments = courseModules.assigments
  */

  /*
  // Si intentamos acceder a una llave no definida en un objeto
  var courseModulesIds = [1,2]
  var studentAssigments = courseModulesIds[3]
  */

  return studentAssigments
}

module.exports = {
  numberValues: numberValues,
  stringValues: stringValues,
  nullValues: nullValues,
  undefinedValues: undefinedValues
}
