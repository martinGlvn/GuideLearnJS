// Con los eventos podemos lograr la interaccion con los uaurios
// estableciendo condiciones =>
const h1 = document.getElementById("titulo");
// AddEventListener => CLICK
const button = document.querySelector(".btn-primary");
button.addEventListener("click", () => {
  console.log("click");
  h1.textContent = "CAMBIAMOS EL TITULO CON CLICK";
  h1.style.background = "red";
});
