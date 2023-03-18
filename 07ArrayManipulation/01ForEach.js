// El cilo forEach nos permite tener un codigo mas sencillo para recorrer
// un array de elementos. Es una alternativa al "for of" el mismo ejecuta
// un elemento por cada iteracion.

const autos = ["Audi", "MercedesBenz", "Ferrari"];
// forEach nos entrega el parametro item que hace referencia a cada elemento que se itera.
autos.forEach((item, index, array) => {
  console.log(index, item);
  console.log(array);
});

// 0 Audi
// [ 'Audi', 'MercedesBenz', 'Ferrari' ]
// 1 MercedesBenz
// [ 'Audi', 'MercedesBenz', 'Ferrari' ]
// 2 Ferrari
// [ 'Audi', 'MercedesBenz', 'Ferrari' ]
