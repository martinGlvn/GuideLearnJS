// String Manipulation =>
//Cuando nos referimos a la manipulacion de variables de tipo string
//hacemos referencia a metodos que nos permiten cortar, modificar, agregar
//contenido a las mismas.

// 1- Starts With X => En JS podemos buscar caracteres por indice de la siguiente manera
const a = "Hello";
console.log(a.charAt(2)); //Metodo "charAt".
console.log(a[0]); // Metodo buscar por indice[.]

//2- Completa el startsWithX función para determinar si el primer carácter del string
//   argumento es el minúsculo x. Si el primer carácter es x regreso true. Si no, regrese false.
function startsWithX(string) {
  if (string[0] === "x") {
    return true;
  } else {
    return false;
  }
}

//3- Comparando Cadenas "Strings".
console.log("a" === "a"); // true
console.log("a" === "A"); // false
console.log("a" === "a "); // false

//4- Mayusculas y Minusculas => ToLowerCade ToUpperCase
console.log("Hello".toLowerCase()); // hello
console.log("Hello".toUpperCase()); // HELLO

//5- Vamos a actualizar nuestro startsWithX función
//   para devolver true para una mayúscula X así como un caso inferior x.
function startsWithX(string) {
  if (string[0].toLowerCase() === "x") {
    return true;
  }
  return false;
}

//6-Longitud de una cadena de texto ".length"
//
console.log("a".length); // 1
console.log("Hello".length); // 5

//7-Complete la función termina con X detectando si
//  el último carácter de la cadena es una x minúscula
//  o una X mayúscula. Devuelva verdadero si lo es, falso de lo contrario.
function endsWithX(string) {
  if (string[string.length - 1].toLowerCase() === "x") {
    return true;
  }
  return false;
}

//8-Completa la función isAllX para determinar si el toda la cadena está
//  hecho de minúsculas x, mayúscula X, o una mezcla de ambos. Devolución true si lo son, false si no.
function isAllX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() !== "x") {
      return false;
    }
  }
  return true;
}

//9- Encuentra el indice de un valor mediante "indexOf" =>
"Hello".indexOf("e"); // 1
"abca".indexOf("a"); // 0
"abc".indexOf("q"); // -1
"happy dog bark".indexOf("dog"); // 6

function findFirstX(string) {
  return string.indexOf("x");
}
