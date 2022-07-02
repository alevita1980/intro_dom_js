"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/

const botonPrimeroPorId = document.querySelector("#boton1");
if (botonPrimeroPorId)
botonPrimeroPorId.innerHTML = "PAGAR";

const botonSegundoPorId = document.querySelector("#boton2");
if (botonSegundoPorId)
botonSegundoPorId.innerHTML = "COPIAR";

const botonTerceroPorId = document.querySelector("#boton3");
if (botonTerceroPorId)
botonTerceroPorId.innerHTML = "CORTAR";



const botonPorClase = document.querySelectorAll(".btn");
console.log(botonPorClase);

boton1.classList.add("agua");
boton2.classList.add("agua");
boton3.classList.add("agua");




