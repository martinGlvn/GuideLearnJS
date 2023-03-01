// El"spreadOperator" nos ayudara a almacenar todos los valores que contiene
// un array y poder utilizarlos en otro.
const arr = [7, 8, 9];
const arrSpreadOperator = [1, 2, ...arr];
console.log(arrSpreadOperator); //[ 1, 2, 7, 8, 9 ]

// Si en algun momento necesitamos todos estos elementos podremos consultarlos
// utilizando los 3 puntos "..." un ejemplo de utilizacion puede ser en nuestras funciones =>
console.log(...arr); //7 8 9

// Utilizamos la desestructuraciones para agregar un nuevo valor a nuestro array dentro del objeto pizzas.
const pizzas = {
  italianas: ["muzzarela", "napolitana"],
};

const nuevaPizza = [...pizzas.italianas, "fugazzeta"];
console.log(nuevaPizza);

// Copiando todos los elementos de un array en otro nuevo array
const nombres = ["martin", "nacho", "miguel"];
const copiaNombres = [...nombres];
console.log(copiaNombres); //[ 'martin', 'nacho', 'miguel' ]

// Copiando los elementos de 2 arrays dentro de un array
const nombres2 = ["quique", "xevi", "miguel"];
const lastNames = ["cranster", "oufa", "lewind"];
const copiaDosArrays = [...nombres2, ...lastNames];
console.log(copiaDosArrays); // [ 'quique', 'xevi', 'miguel', 'cranster', 'oufa', 'lewind' ]

// Iterables : arrays, strings, maps, sets, LOS OBJETOS NO SON ITERABLES.
const str = "marti";
const letras = [...str, "n"];
console.log(letras); //[ 'm', 'a', 'r', 't', 'i', 'n' ]
