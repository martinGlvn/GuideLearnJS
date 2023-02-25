// En es6 se introdujo 3 formas nuevas de escribir objetos literales.

// 1->
// Antes de es6 para agregar un nuevo objeto a un objeto lo haciamos asi object : object
// ahora lo podemos realizar sin la necesidad de escribir 2 veces la declararion.
const extendCasa = {
  cocheras: "3",
  patios: "2",
};
const casa = {
  m2: "500m",
  color: "blanca",
  habitaciones: { baños: "5", dormitorios: "5", pisos: "2" },
  extendCasa,
};
console.log(casa); //Ahora casa tendra la propiedad casa con el objeto extendCasa.

// 2->
// Para agregar metodos de funciones la sintaxis fue reducida para una mejor comprension del codigo.
const martin = {
  name: "martin",
  printName(soy) {
    //Con esta nueva sintaxis no es necesario : function
    return `hola ${this.name} soy ${soy}`;
  },
};
console.log(martin.printName("juan"));

// 3 ->
// Ahora tambien podremos manipular el nombre de nuestros objetos =>
const nombres = ["juan", "nacho", "lugas"];
const capitalUsuarios = {
  [nombres[0]]: "contiene $1000 pesos",
  [nombres[1]]: "contiene $5000 pesos",
  [nombres[2]]: "contiene $2250 pesos",
};
console.log(capitalUsuarios); //juan: 'contiene $1000 pesos', nacho: 'contiene $5000 pesos', lugas: 'contiene $2250 pesos'

//
