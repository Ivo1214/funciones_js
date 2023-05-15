"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

function generarInvitados(){
    let listaInvitados = new Array();
    let txt= '';
    for (let i = 0; i < 3; i++) {
        listaInvitados[i] = prompt ('Ingrese el '+ (i+1) + '° invitado ');
        
    }
    
    for (let i = 0; i < listaInvitados.length; i++){
        if (txt !== ''){
            txt = txt + ', ';
        }
        txt = txt + listaInvitados[i];
    }
    return txt;
}

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invidatos" para imprimir
en consola la lista

*/

// Definir y crear la función antes de esta llamada
let invitados = generarInvitados();
console.log(`Mis invitados: ${invitados}`)