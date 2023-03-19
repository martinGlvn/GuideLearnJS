// Almacenamos la ul lista en una constante=>
const lista = document.querySelector("#lista");

// Creamos un elemento especifico por su tagName => usando createElement
const li = document.createElement("li");

// Agregamos contenido a la etiqueta creada usando "textCotent" =>
li.textContent = "Elemento desde js";

//Utilizamos AppenChild para pujar el elemento especificando el nodo padre
lista.appendChild(li);

// InnerHTML =>
const paises = ["arg", "br", "mx"];
paises.forEach((pais) => {
  lista.innerHTML += `<li>${pais}</li>`;
});
