"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

function generarInvitados(){
    let listaInvitados = new Array();
    for (let i = 0; i < 3; i++) {
        listaInvitados[i] = prompt ('Ingrese el '+ (i+1) + '° invitado ');
        
    }
    
    for (let i = 0; i < listaInvitados.length; i++){
        console.log (listaInvitados[i]);
    }

}

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada
generarInvitados();