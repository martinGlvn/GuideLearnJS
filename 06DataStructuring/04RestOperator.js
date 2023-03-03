// El rest operator lo utilizaremos para colocar el resto de valores que contenga
// un array por separado a lo que si querramos...

// Rest en Arrays =>

// almacenamos 2 valores en variables y el resto en un array independiente =>
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [ 3, 4, 5 ]

//Obtenemos el resto de 2 propiedades (arrays) del objeto "menuInfantil" y almacenamos 1 valor en "z" =>
const menuInfantil = {
  dayMenu: ["pizza", "agua", "fruta"],
  nightMenu: ["verduras", "jugo", "helado"],
};

const [z, ...todos] = [...menuInfantil.dayMenu, ...menuInfantil.nightMenu];
console.log(z, todos); // pizza [ 'agua', 'fruta', 'verduras', 'jugo', 'helado' ]

// Rest en Objetos => Funciona de igual forma con la diferencia que el resto se almacenara en un objeto

const verduleria = {
  productos: {
    frutas: { manzana: "$25", pera: "$15", uva: "$10" },
    verduras: { apio: "$5", lechuga: "$20", tomate: "$30" },
    jugos: { naranja: "$70", banana: "$90" },
  },
};
const { juguitos, ...sobrante } = verduleria.productos;
console.log(juguitos, sobrante);

// Rest en funciones =>

// Esta funcion utilza rest para almacenar en un array los datos que nos pasan por parametro =>
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3); //5
add(5, 3, 7, 2); //17
add(8, 2, 5, 3, 2, 1, 4); //25
