/**
 * Variables globales que SI podemos usar dentro de una función ;)
 */

let numeroClicsPacman = 0;
let numeroClicsGhost = 0;

function clicPacman() {
  // incremento la variable global clicsPacman
  numeroClicsPacman++;

  // actualizo el text content del nodo adecuado
  document.querySelector("#clics-pacman").textContent = numeroClicsPacman;
}


function clicGhost(){
  numeroClicsGhost++;
  document.querySelector("#clics-fantasma").textContent = numeroClicsGhost;
}