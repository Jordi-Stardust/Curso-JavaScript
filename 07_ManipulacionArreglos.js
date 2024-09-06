/**
 * Manipulación arreglos
 */

// forEach: Permite recorrer los elementos de un arreglo.
var letras = ['a','b','c','d','e'];

console.log(letras.length);// Con length nos da la cantidad de elementos del arreglo.

//for (let i = 0; i < letras.length; i++){ // Podríamos hacerlo con un for.
//    const element = letras[i];
//    console.log(element);
//}

letras.forEach((elemento) => { // Utilizamos la función forEach. A forEach le pasamos un parámetro que es una arrow function.
    console.log(elemento);
})

letras.forEach((elemento) => console.log(elemento)); // Otra manera de utilizar forEach más compacta con la arrow function.


// Push, Shift, Pop. Son mutables ya que modifican el arreglo donde trabajan.
var letras = ['a','b','c','d','e']; // Con Push añadimos la 'f'.
letras.push('f');
console.log(letras);

var primerElemento = letras.shift(); // Shift modifica el arreglo. Obtiene el primer elemento del arreglo y lo elimina del array.
console.log(primerElemento);
console.log(letras); // Quita el primer elemento del array.

var ultimoElemento = letras.pop(); // Pop obtiene el último elemento del arreglo. Elimina el último elemento del arreglo.
console.log(ultimoElemento);
console.log(letras);

// Map. Es inmutable, es decir, no modifica el array. Recibe una arrow function como parámetro. // (() => {})
// Con Map recorremos el array y lo modificamos a nuestra conveniencia en otro array. Map debe retornar el elemento modificado.
// Importante: Transformamos cada uno de los elemenos del array en un objeto JavaScript con dos propiedades (nombre y asistencia). Para que realmente lo transforme debe estar 'return'.
var estudiantes = ['Jordi', 'Diego', 'Emma', 'Rocío'];
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
})
console.log(estudiantes);
console.log(asistencia); // Modifica asistencia, no estudiantes.
console.log(estudiantes); // No modifica el arreglo de origen.

// Ahora quiero que retorne un punto después de cada nombre:
var estudiantes = ['Jordi', 'Diego', 'Emma', 'Rocío'];
var asistenciabis = estudiantes.map((nombre) => `${nombre}.`)
console.log(estudiantes);
console.log(asistenciabis); // El array asistenciabis sí que ha sido modificado.
console.log(estudiantes); // El array estudiantes no ha sido modificado.

// Siguiendo con Map: Vamos a agregar una propiedad a un objeto.
var productos = [
    {nombre: 'camisetas', precio: 15},
    {nombre: 'zapatillas', precio: 20},
    {nombre: 'pantalón', precio: 25}
]

var productosImpuesto = productos.map((producto) => {
    producto.impuesto = .12;
    return producto
})

console.log(productos);
console.log(productosImpuesto);
console.log(productos);
