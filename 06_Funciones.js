/**
 * Funciones
 */

//declarativa
//function nombreDeLaFuncion () {

// }

function saludar() {
    console.log('Hola soy Jordi');
}
saludar(); // Así llamamos a la función saludar.

// Le pasamos valores como parámetros:
function saludar(nombre) {
    console.log('Hola soy ${nombre}');
}
saludar('Jordi');

// Una función también puede devolver un valor mediante 'return':
function saludar(nombre) {
    return 'Hola soy ${nombre}'; // Se debe almacenar en una variable el valor que devuelve 'return'.
}
var saludo = saludar('Jordi');
console.log(saludo);
console.log(saludar('Jordi Romera')); // Otra manera de llamar una función.

// Funciones de expresión o anónimas (tienen un return implícito): 
var suma = function(a, b) {
    return a + b;
}

console.log(suma(2, 2));

// arrow function
var restar = (a, b) => {
    return a - b;
}

console.log(restar(4, 2));

var multiplicar = (a, b) => a * b; // Ahora el return está implícito.
console.log(multiplicar(2, 2));

