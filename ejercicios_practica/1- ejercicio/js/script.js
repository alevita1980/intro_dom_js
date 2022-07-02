"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

1)
Leer el título del "header" del post e imprimirlo en consola.   

2)
Cambiar título utilizando javascript por otro cualquiera.

*/

const tituloPrincipalPorClase = document.querySelector(".post-header");
console.log (tituloPrincipalPorClase.textContent);

if(tituloPrincipalPorClase)
tituloPrincipalPorClase.innerHTML="Presione un Boton";



