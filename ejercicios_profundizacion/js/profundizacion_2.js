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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/
function generarInvitados(event){
    let cantidad = parseInt(document.getElementById("cantidadInvitados").value);
    let txt='';

    let listaInvitados = new Array();
    for (let i = 0; i < cantidad; i++) {
        listaInvitados[i] = prompt ('Ingrese el '+ (i+1) + '° invitado ');
        
    }
    
    
    for (let i = 0; i < listaInvitados.length; i++){
        if (txt !== ''){
            txt = txt + ', ';
        }
        txt = txt + listaInvitados[i];
    }
    alert('Listad de invitados: ' + txt);
}