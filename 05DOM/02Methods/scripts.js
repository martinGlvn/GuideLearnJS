console.log("=======LEARN_BASIC_METHODS=======");

//Document.getElementsByClassName
//Document.getElementsByTagName

//Document.getElementsById => "nos devuelve la refenrencia a un elemento por su ID"
console.log(document.getElementById("tituloWeb")); //<h1 id="tituloWeb">Lorem ipsum dolor sit amet.</h1>
console.log(document.getElementById("tituloWeb").textContent); //Lorem ipsum dolor sit amet.

//Document.addEvenListener => "Espero a que cargue todo el DOM y luego ejecuta todo el contenido dentro"
document.addEventListener("DOMContentLoaded", () => {
  console.log(document.getElementById("tituloWeb")); //<h1 id="tituloWeb">Lorem ipsum dolor sit amet.</h1>
  console.log(document.getElementById("tituloWeb").textContent); //Lorem ipsum dolor sit amet.
});

//Document.querySelector "selecciona un solo elemento de la clase"
console.log(document.querySelector("#tituloWeb2"));

//Document.querySelectorAll "selecciona todos los elementos que contenga la clase"
console.log(document.querySelectorAll(".text-danger")); // tendremos los 4 elementos con la clase text-danger

//Document.querySelectorAll pero solo seleccionando lo que esta dentro del div
console.log(document.querySelectorAll(".container .text-danger")); // tendremos los 3 elementos del div

//Almacenamos un elemento en una variable =>
const selectH1 = document.getElementById("selectP");
console.log(selectH1.className); //text-danger

//Modificando el valor de una etiqueta
const modifyElement = document.getElementById("selectP");
modifyElement.textContent = "MODIFICAMOS EL CONTENIDO";

//Modificando el estilo de una etiqueta
modifyElement.style.background = "red";

//Document.createDocumentFragment
//Document.createElement
