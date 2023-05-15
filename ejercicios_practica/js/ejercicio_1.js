"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

function imprimirMayor(numero1, numero2) {
    console.log("Funcion imprimir mayor")
    // En esta función debe determinar cual de los dos
    // números ingresados por parámetro es mayor
    // y luego imprimir dicho valor en consola
    if (numero1 > numero2) {
        return ('El numero1 es mayor al numero2');
    } else {
        return ('El numero2 es mayor al numero1');
    }
}

console.log(imprimirMayor(2, 10));