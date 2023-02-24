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
