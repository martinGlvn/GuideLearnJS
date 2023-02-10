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

// Template String
let myName = "Martin";
console.log(`hola como andas ${myName}`);

/*  Diferencia entre let && const && var.
    "var" => es una variable global que no respeta el scope y sobreescribe variables
    en cambio "let" => si respeta el scope y hace referencia a la funcion en el q se encuentra.
    "const" => nos permite almacenar datos que no podran ser modificados.
*/
var z1 = "hola";
var z2 = "chau";

for (let i = 0; i < 19; i++) {
  console.log("nuestra variable i respeta el scope de for()");
}

const z3 = "noPuedoSerModificado";
z3 = "noPuedoModificar";
console.log(z3); //Error de asignacion no puede ser modificado

//Si podemos modificar el valor de un array que este en "const"
const array = [];
array[0] = "martin";
console.log(array); // ["martin"]
