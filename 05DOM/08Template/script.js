const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment("");
const liTemplate = document.querySelector("#liTemplate");
const paises = ["arg", "peru", "mx"];

paises.forEach((pais) => {
  const clone = liTemplate.content.cloneNode(true);
  clone.querySelector(".text-primary").textContent = pais;
  fragment.appendChild(clone);
});
lista.appendChild(fragment);

// const clone = liTemplate.content.cloneNode(true);
// clone.querySelector(".text-primary").textContent =
//   "agregue atraves de un template";
// lista.appendChild(clone);
