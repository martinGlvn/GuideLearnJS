// Some comprueba si al menos un elemento del array cumple con la condicion =>
const autos2 = [
  { nombre: "audi", color: "rojo" },
  { nombre: "mercedesBenz", color: "blanco" },
  { nombre: "ford", color: "gris" },
];

const existe = autos2.some((auto) => auto.nombre === "audi"); // true
console.log(existe);
