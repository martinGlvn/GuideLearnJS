// Este metodo nos ayuda a manipular arrays que contengan otros arrays dentro [[..]]

// anulamos las matrices internas utilizando for
const matriz = [
  [1, 2, 3],
  [2, 4, 5],
  [5, 6, 7],
];
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}
console.log(newArray); //[ 1, 2, 3, 2, 4, 5, 5, 6, 7]

// anulamos las matrices internas utilizando "FLAT"
const rtaFlat = matriz.flat();
console.log(rtaFlat); //[ 1, 2, 3, 2, 4, 5, 5, 6, 7]

// ¿que pasaria si tendriamos multiples arrays dentro de arryas?
// para eso flat permite especificar el nivel que se aplanara.

const matriz2 = [
  [1, 2, 3],
  [2, 4, 5, [10, 50]],
  [5, 6, 7, [100, 500]],
];
const rta2Flat = matriz2.flat(3);
console.log(rta2Flat); // [1,  2, 3, 2, 4, 5, 10, 50, 5, 6, 7, 100, 500]

// ---------------------------------------------

// FlatMap =>

// En este ejemplo lo que hicimos es sacar los arrays dentro un array de objetos con map y luego flat.
const usuarios = [
  { userId: 1, userName: "Martin", atributos: ["Nice", "Cute"] },
  { userId: 2, userName: "Miguel", atributos: ["Lovely"] },
  { userId: 3, userName: "Juan", atributos: ["Cool"] },
];
const atributs = usuarios.map((usuario) => usuario.atributos).flat(); //[ 'Nice', 'Cute', 'Lovely', 'Cool' ]
console.log(atributs);

// La resolucion anterior se podria resolver utilizando FLATMAP =>
const atributs2 = usuarios.flatMap((usuarios) => usuarios.atributos);
