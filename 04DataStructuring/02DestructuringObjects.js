const restaurant = {
  name: "Food Italian",
  location: "Argentina",
  categories: ["italian", "Vegetarian", "Organic"],
  mainMenu: ["Pizza", "Pastas", "Rissoto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};
// Desestructuracion de un elemento del objeto =>
const nombreRestaurante = restaurant.name;
console.log(nombreRestaurante);

// Desesctructuracion de multiples elementos del  Objeto =>
const { name, location, openingHours } = restaurant;
console.log(openingHours); //thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 }

// Si ya existe una variable con el mismo nombre del elemento que se encuentra en el objeto
// podemos utilizar un alias para asignar ese valor a una nueva variable =>
const { name: localName, openingHours: openRestaurant } = restaurant;
console.log(localName); //Food Italian

// "por defecto" => En el caso de que esa propiedad del objeto que es asignada a una nueva variable
// no exista lo que hacemos es utilizar un valor "por defecto" =>
const { name: localName2 = "no existe" } = restaurant;

// Desestructurar objetos dentro de objetos =>
const { sat: newSat } = restaurant.openingHours;
console.log(newSat); //{ open: 0, close: 24 }

//Agregamos valores por defecto a nuestros objetos y modificamos el nombre de su propiedad.
const { mainMenu = [], categories: specializations = [] } = restaurant;
console.log(specializations); //[ 'italian', 'Vegetarian', 'Organic' ]

// Mutacion de variables en objetos =>
let z = 10;
let x = 15;
const obj = { z: 25, w: 45 };
({ z, w } = obj);
console.log(z, w);

// Desestructuracion de objetos anidados {{{...}}} =>
const {
  fri: { open: o, close: t },
} = openingHours;
console.log(o, t); //11 23

// Tambien podremos desestructurar los parametros que reciba nuestra funcionalidad =>
const martin = {
  name: "martin",
  age: 25,
  infoMartin: function ({ start = 20, final }) {
    console.log(`martin tiene ${start}`);
  },
};
martin.infoMartin({
  start: "52",
});
