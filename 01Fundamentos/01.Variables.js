/** Variables  => Capacidad de almarcenar diferentes tipos de valores...
 * 1- Variable numerica
 * 2- Variable string
 * 3- Multivariables => asignamos el mismo valor de una variable en otra
 * 4- Booleans => Son variables que solo almacenan 2 valores "TRUE" && "FALSE"
 * 5- Contatenacion de cadenas de texto
 * 6- Varibles Mutables => ("let") & Inmutables => ("const")
 */

const a = 3;

const b = "Martin";

const c = 5;
const d = c;

const e = true;
const f = false;

const g = "Martin";
const h = `mi nombre es ${g}`;
console.log(h);

const i = "variable inmutable";
let j = "variable mutable";
j = "esta variable es mutable";
console.log(j);
