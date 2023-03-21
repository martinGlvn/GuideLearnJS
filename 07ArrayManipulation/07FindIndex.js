// Find index devulve el indice del elemento que cumplio con la condicion =>
const autos2 = [
  { nombre: "audi", color: "rojo" },
  { nombre: "mercedesBenz", color: "blanco" },
  { nombre: "ford", color: "gris" },
];

const indice = autos2.findIndex((i) => i.color === "rojo");
console.log(indice); // 0
