/**
 * Operadores
 */

/**
 * Operadores de Asignación.
 */

// Operador de Asignación:
var x = 2;
var y = true;

// Operador de asignación de adición (+=):
var x = 2;
var y = 1;

x += y; // x = x + y
console.log(x);

// Operador de asignación de resta (-=):
var x = 2;
var y = 1;

x -= y; // x = x - y
console.log(x);

// Operador de asignación de multiplicación (*=):
var x = 2;
var y = 1;

x *= y; // x = x * y
console.log(x);

// Operador de asignación de división (/=):
var x = 2;
var y = 1;

x /= y; // x = x / y
console.log(x);

// Operador de asignación de residuo (%=):
var x = 2;
var y = 1;

x %= y; // x = x % y
console.log(x);

/** Operadores de Comparación: Siempre devuelve un True o False.
 * 
 */

// Operador Igual (==)
console.log(3 == 3);
console.log(3 == '3'); // Cuidado con esto. JavaScript considera igual un número que el string.

// Operador no es igual (!=):
console.log(3 != 3);

// Operador estrictamente igual (===):
console.log(3 === 3);
console.log(3 === '3'); // Con el estricto ahora devuelve false.

// Operador estrictamente desigual (!==):
console.log(3 !== '3');
console.log(3 != '3');

// Operadores >, >=, <, <=
console.log(3 > 4);
console.log(3 >= 4);

/**
 * Operadores Aritméticos
 * 
 * +, -, /, %
 */
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

// Operadores de incremento (++)
var numero = 0;
console.log(++numero); //Si ponemos ++numero, inmediatamente incrementa el valor de numero en 1.
console.log(numero++); // Si ponemos numero++, primero el valor de numero es 0 y luego 1.

// Operadores de decremento (--)
var numero = 3;
console.log(--numero);
console.log(numero--); // Lo mismo que en incremento.

/**
 * Operadores Lógicos
 */

// AND
console.log(true && true);
console.log(2>3 && 1<=2);

// OR
console.log(true || false);
console.log(false || false);

// NOT
console.log(!true);

// Operador de cadena o concatenación (+). Sólo con strings.
var nombre = 'Jordi';
var apellido = 'Romera';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Operador condicional (condición ? val1 : val2).
console.log(2 > 3 ? 'Es mayor' : 'Es menor'); // Si la condición es verdadera retorna el primer valor. Si la condición es falsa retorna el segundo valor.

// Operador de desestructuración.
var persona = {
    nombre: 'Jordi',
    apellido: 'Romera'
}
var {nombre, apellido} = persona;
console.log(nombre);
console.log(apellido);
console.log(persona);
// Otra variante:
var persona = {
    nombre: 'Jordi',
    apellido: 'Romera'
}
var {nombre:xyz, apellido} = persona; // Simplemente asignamos un nuevo nombre a la desestructuración.
console.log(zyz);
console.log(apellido);
console.log(persona);

// Desestructuración de arreglos:
var arreglo = [1,2,3,4,5]

var [primeraPosicion, segundaPosicion] = arreglo;
console.log(primeraPosicion);
console.log(segundaPosicion);

/** Operador de miembro o acceso de propiedad
 * 
 */
// Notación punto:
var persona = {
    nombre: 'Jordi',
    apellido: 'Romera'
}

console.log(persona.nombre);
console.log(persona.apellido);

// Notación por corchetes:
var persona = {
    nombre: 'Jordi',
    apellido: 'Romera'
}

console.log(persona['nombre']);

// Notación por corchetes en arreglos:
var arreglo = [21,22,23,24,25,26]
console.log(arreglo[2]); // Empieza a contar por 0.

// Operación de determinación de tipo (typeof): Retorna el tipo de dato de un valor.
console.log(typeof 'Jordi');
console.log(typeof '21');
console.log(typeof true);
