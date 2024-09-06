/** Control de flujo
 * 
 */

// Estructura If
// if (condicion) {

//}

var llueve = true;
if (llueve) {
    console.log('Necesito paraguas');
}

var administrador = 'administrador';
if (administrador === 'administrador') {
    console.log('Bienvenido al sistema');
}

const MAYORIA_DE_EDAD = 18;
var edadPersona = 12;

if (edadPersona >= MAYORIA_DE_EDAD) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

var semaforo = 'rojo';
if (semaforo === 'verde') {
    console.log('Arranca');
} else if (semaforo === 'amarillo') {
    console.log('listo');
} else {
    console.log('Motores apagados');
}

// Estructura switch: Si alguno de los casos se cumple, ejecuta el código de dentro de ese bloque.

switch (expresion) {
    case expresion:
        // código
        break; // Si no pongo 'break', no se detiene. Evaluaría la siguiente expresión.
    case expresion:
        // código
        break;
    default:
        console.log('Este caso se cumple si ninguno de los anteriores cumple la expresión');
}

// Ejemplo:
var producto = 'pera'
switch (producto) {
    case 'papaya':
        console.log('Las papayas cuestan 1$/kg');
        break; // Si no pongo 'break', no se detiene. Evaluaría la siguiente expresión.
    case 'naranjas':
        console.log('Las naranjas cuestan 2€/kg');
        break;
    case 'mango':
        console.log('Los mangos cuestan 3€/kg');
        break;
    default:
        console.log('No disponemos de este producto');
}

// Otro ejemplo:
var producto = 'papaya'
switch (producto) {
    case 'papaya':
    case 'naranjas':
        console.log('Las papayas y naranjas cuestan 2€/kg');
        break;
    case 'mango':
        console.log('Los mangos cuestan 3€/kg');
        break;
    default:
        console.log('No disponemos de este producto');
}