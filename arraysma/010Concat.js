// Metodo que nos sirve para fucionar arrays, algo importante de concant es que es inmutable es decir
// no modifica el array creado simplemente crea uno nuevo con los valores que establecimos.

const comidas1 = ["pan", "pollo", "tomate"];
const comidas2 = ["lechuga", "mayonesa", "huevo"];

// Contenar los 2 arrays utilizando un ciclo "FOR".
const arrayConcatenado = comidas1;
for (let index = 0; index < comidas2.length; index++) {
  const element = comidas2[index];
  arrayConcatenado.push(element);
}
console.log(arrayConcatenado); // [ 'pan', 'pollo', 'tomate', 'lechuga', 'mayonesa', 'huevo' ]
