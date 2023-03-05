// Filter lo utilizamos para la filtracion de elementos de un array frente a una condicion establecida,
// este es inmutable es decir que no cambia el array simplemente crea unp nuevo con los elementos modificados.

const vehiculos = ["auto", "camion", "camioneta", "bici"];

// Filtro utilizando for y un condicional.
const vehiculosModificados = [];
for (let i = 0; i < vehiculos.length; i++) {
  const vehiculo = vehiculos[i];
  if (vehiculo.length >= 6) {
    vehiculosModificados.push(vehiculo);
  }
}
console.log(vehiculosModificados);

//---------------------------------------------------

const compras = [
  { Name: "Juan", precioTotal: 500, entrega: false },
  { Name: "Miguel", precioTotal: 700, entrega: true },
  { Name: "Luis", precioTotal: 100, entrega: false },
  { Name: "Enrique", precioTotal: 50, entrega: true },
];

// Filtro utilizando el metodo "filter"
const useFilter = vehiculos.filter((vehiculo) => vehiculo.length >= 6);
console.log(useFilter);

// Filter utilizando un array de objetos

// Retornar las compras que hayan sido entregadas
const comprasEntregadas1 = compras.filter((compra) => compra.entrega);
console.log(comprasEntregadas1); //[{ Name: 'Miguel', precioTotal: 700, entrega: true },{ Name: 'Enrique', precioTotal: 50, entrega: true }]

// Ahora queremos que nos retorne las compras que hayan sido entregadas y que superen un monto de $100.
const comprasEntregadas2 = compras.filter(
  (compra) => compra.entrega && compra.precioTotal >= 100
);
console.log(comprasEntregadas2); // [ { Name: 'Miguel', precioTotal: 700, entrega: true } ]

// Filtrando por nombre de Cliente
const busqueda = (nombre) => {
  return compras.filter((compra) => {
    return compra.Name.includes(nombre);
  });
};

console.log(busqueda("Miguel"));
