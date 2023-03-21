// Map itera sobre cada elemento del array y retorna un nuevo arreglo que contiene los
// resultados de llamar a la funcion callback todo sin mutar el array original =>

const frutas = ["pera", "uva", "manzana"];
const modificacionArray = frutas.map((item) => item + "1");
console.log(modificacionArray); //[ 'pera1', 'uva1', 'manzana1' ]

const comidas = ["🥩", "🍗", "🍣"];
const nuevoArray = comidas.map((comida) => comida);
console.log(nuevoArray); // [ '🥩', '🍗', '🍣' ]

// Utilizamos map para devolver los "name" del Objeto =>
const personas = [
  { name: "martin", age: 50 },
  { name: "juan", age: 50 },
  { name: "ricardo", age: 50 },
];
const nombres = personas.map((nombre) => nombre.name);
console.log(nombres); // [ 'martin', 'juan', 'ricardo' ]);

// Utilizamos map para devolver cada elemento multiplicado por 2 =>
const numeros = [5, 10, 15, 50];
const numeros2 = numeros.map((num) => num * 2);
console.log(numeros2); // [ 10, 20, 30, 100 ]
