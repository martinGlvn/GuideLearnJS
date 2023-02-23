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
// Desesctructuracion de Objetos =>
const { name, location, openingHours } = restaurant;
console.log(openingHours); //thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 }

// Modificacion de nombre de nuestras propiedades en los objetos =>
const { name: localName, openingHours: openRestaurant } = restaurant;
console.log(localName); //Food Italian

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
