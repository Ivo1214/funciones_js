/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/




// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let num4 = 4;
// let num5 = 5;


// function promedio (num1, num2, num3, num4, num5) {
//     let resultado = parseInt((num1 + num2 + num3 + num4 + num5) / 5);
//     console.log ('El promedio de los numeros es: ' + resultado);
//     alert(`El promedio de los numeros ingresados es: ${resultado}`);
// }

// console.log (promedio (num1, num2, num3, num4, num5));



// Usando un formulario:
function promedio(event) {
    event.preventDefault(); //Esto previene que se envie el formulario de forma predeterminada

    // Tomo los datos recibidos del formulario
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);


    let resultado = (num1 + num2 + num3 + num4 + num5) / 5;
    console.log ('El promedio de los numeros es: ' + resultado);
    alert(`El promedio de los numeros ingresados es: ${resultado}`);
}