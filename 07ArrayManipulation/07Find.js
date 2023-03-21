// El metodo "find" nos devuelve el primer elemento del array que cumpla con la condicion
// establecida =>

const numeros = [2, 434, 25, 30, 9];

// Si existe el elemento en nuestro array lo retornara.

let rta = undefined; // FIND en caso de no encontrar una rta siempre retornara "UNDEFINED"
for (let index = 0; index < numeros.length; index++) {
  const element = numeros[index];
  if (element === 30) {
    rta = element;
    break;
  }
}
console.log(rta);

// Solucion utilizando find
const rta2 = numeros.find((numero) => numero === 30);
console.log(rta2); // 30

// Utilizando Find en objetos
const autos = [
  { nombre: "audi", color: "rojo" },
  { nombre: "mercedesBenz", color: "blanco" },
  { nombre: "ford", color: "gris" },
];
const rta3 = autos.find((auto) => auto.color === "gris");
console.log(rta3); // { nombre: 'ford', color: 'gris' }

// "findIndex" Tambien podremos obtener en que posicion se encuentra el elemento obtenido
const rta4 = autos.findIndex((auto) => auto.color === "gris");
console.log(rta4); // 2

// ----------------------------------------
const autos2 = [
  { nombre: "audi", color: "rojo" },
  { nombre: "mercedesBenz", color: "blanco" },
  { nombre: "ford", color: "gris" },
];
// Destructuracion de objeto + metodo "find" =>
const { nombre: hola } = autos2.find((auto) => auto.nombre === "audi");
console.log(hola);
