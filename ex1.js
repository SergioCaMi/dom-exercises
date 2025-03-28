/**
 * Completa cada ejercicio. Solo necesitas una línea de código JavaScript para cada ejercicio.
 *
 *  * REsultado deseado: https://oscarm.tinytake.com/msc/ODgxNzI5N18yMjI0ODE2OQ
 *
 **/

/**
 * Cambia el título de la página a rojo usando un estilo en línea
 */

const title = document.querySelector("h1");
const box2 = document.getElementById("caja-2");
const pIntro = document.querySelector("p.intro");
const lastBox = document.getElementById('ultimo');
const secondLast = document.querySelector("p:nth-last-of-type(2)");


title.style.color = "red";  
/**
 * Cambia el tamaño del título de la página a 48px usando un estilo en línea
 */
title.style.fontSize = "48px";
/**
 * Muestra por console.log el texto de la caja 2
 */

console.log(box2.textContent)
/**
 * Cambia el color del borde del párrafo p.intro a verde usando un estilo en línea
 */
pIntro.style.borderColor = "green";

/**
 * Elimina la clase "estilo-3" de la última caja.
 * Ayuda: https://www.w3schools.com/howto/howto_js_remove_class.asp
 */


lastBox.classList.remove('estilo-3');

/**
 * Añade la clase CSS "ocultar" al penúltimo párrafo. La última cita debería desaparecer. Compruebalo con el inspector de elementos. 
 * Ayuda: https://simpledev.io/lesson/add-class-js/
 * 
 * BONUS: Haz el ejercicio sin modificar el ex1.html
 
 */
secondLast.classList.add("ocultar");
