function boton1() {
  document.querySelector("#panel").style.backgroundColor = "green";
}

function boton2() {
  document.querySelector("#panel").style.backgroundColor = "rgb(255, 0, 0)";
}

function asociamePorFavor() {
  document.querySelector("#panel").textContent =
    "Gracias por asociar la función al botón 3!";
}

function calcularLetrasTitulo() {
  // 1. Accede a la propiedad textContent del nodo h1. Guarda esa información en una variable
  const textH1 = document.querySelector("h1").textContent;
  // 2. Usa el método adecuado para obtener el número de carácteres del string en textContent. Pon ese valor en el textContent del #panel
  document.getElementById("panel").style.fontSize = "48px";
  console.log(document.getElementById("panel").textContent=textH1.length+" carácteres en el h1.") ;

}
