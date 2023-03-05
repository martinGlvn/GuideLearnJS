// Find es un metodo parecido a filter con la diferencia que este nos retornara solo un elemento
// que cumpla con la condicion, si tendriamos un arrays con multiples elementos que cumplan la condicion
// solo nos retornaria el primero elemento que cumplio la misma, en el caso que tuviesemos un array con
// multiples objetos dentro nos retornaria el objeto que cumplio con la condicion, lo importante es saber que
// find nunca nos retornara un array.

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
console.log(rta2);

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
