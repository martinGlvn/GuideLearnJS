// Seleccionamos IDs =>
const inputColor = document.querySelector("#inputColor");
const btnVisualizar = document.querySelector("#btnVisualizar");
const parrafoExa = document.querySelector("#parrafoExa");
const cardColor = document.querySelector("#cardColor");

//Obtenemos el color con el input =>

btnVisualizar.addEventListener("click", () => {
  cardColor.style.backgroundColor = inputColor;
});
