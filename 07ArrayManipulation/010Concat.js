// Metodo que nos sirve para fucionar arrays, algo importante de concant es que es inmutable es decir
// no modifica el array creado simplemente crea uno nuevo con los valores que establecimos.

const comidas1 = ["pan", "pollo", "tomate"];
const comidas2 = ["lechuga", "mayonesa", "huevo"];

// Contenar los 2 arrays utilizando un ciclo "FOR".
const arrayConcatenado = [...comidas1]; //creamos una variable nueva que contenga array1 para luego sumarle array 2
for (let index = 0; index < comidas2.length; index++) {
  const element = comidas2[index]; //almacenamos cada valor de array2.
  arrayConcatenado.push(element); //pusheamos cada elemento de array1 a array2.
}
console.log(arrayConcatenado); // [ 'pan', 'pollo', 'tomate', 'lechuga', 'mayonesa', 'huevo' ]

// Contenar los 2 arrays utilizando un ciclo "concat"
const concatenacion = comidas1.concat(comidas2);
console.log(concatenacion);
