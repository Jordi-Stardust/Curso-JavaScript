/**
 * Variables 
 * 
 * 3 formas de definir variables:
 * 
 * var: Variable Global.
 * let: Variable dentro del bloque que la declares.
 * const
 */

// variables con VAR:
var nombre = 'Jordi'; // x = 2
console.log(nombre);

var edad = 50;
console.log(edad);

var persona = {
    nombre: 'Jordi',
    apellido: 'Romera',
    edad: 27;
    direccion: {
        calle: 'Sant Antoni',
        numeroDeCasa: 2,
    },
    ciudadesVisitadas: [
       'BCN',
       'MAD',
       'ZGZ' 
    ]
}

var ciudad; // Defino una variable sin valor. Después le añado un valor.
ciudad = 'BCN';
ciudad = 'MAD'; // Redefino la variable.
ciudad = 13; // Debilmente tipado significa que la variable puede almacenar cualquier tipo dato en la variable.
console.log(ciudad);

// Variables con LET:
let nombre = 'Jordi'; // Let funciona únicamente dentro del bloque que tu lo declares. 
console.log(nombre);
{
    let saludo = 'Hola soy Jordi';
    console.log(saludo);
}
console.log(saludo); // Vemos que no funciona fuera del bloque en que he declarado la variable.

// Variables con CONST: No cambian durante el tiempo. Buena práctica: escribirlo en mayúsculas y con guiones bajos.
const NUMERO_PI = 3.14;
console.log(NUMERO_PI);

const PI; // Otra buena práctica: Una constante siempre debe tener un valor, debemos inicializarla. Sinó da error.
console.log(PI); 

const PI = 3.14; // Otra buena práctica: Una constante no puede tener varios valores.
PI = 3.15;
console.log(PI);