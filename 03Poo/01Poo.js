// En js los objetos se inicializan con {...}, el objeto team contiene 3 valores
const team = {
  name: "Mets",
  wins: 86,
  inPlayoffs: false,
};


//¡Creemos un objeto que represente una orden de pizza!
//En el order objeto, agregue las siguientes tres claves con valores en consecuencia:
// 1- pizzas - Cualquiera número mayor que cero.
// 2- extraCheese - UNA booleano. Ya sea true o false.
// 3- deliveryInstructions - Cualquiera cuerda de instrucciones.
const order = {
  pizzas: 50,
  extraCheese: true,
  deliveryInstructions: "hola",
};
//Si quisieramos recuperar un valor del objeto "order" lo hariamos de la siguiente manera =>
console.log(order.pizzas); // 50
console.log(order["extraCheese"]); // True



//Encuentra el número de pizzas en un order2 objeto.
const order2 = {
  pizzas: 3,
  extraCheese: true,
  deliveryInstructions: "Round the back, please!",
};
function numberOfPizzas(order) {
  return order2.pizzas;
}
console.log(numberOfPizzas());




//Array y Objetos =>
const equipo = {
    name: "Mets",
    wins: 86,
    inPlayoffs: false,
};
const equipos = [equipo1, equipo2, equipo3];
for(let i = 0; i < equipos.length; i++) {
    console.log(equipos[i].name); 
}


//Pizzas Totales => 
const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];
function numberOfPizzas(orders) {
    const pizzasTotales = 0;
    for(let i = 0; i < orders.length; i++) {
        pizzasTotales += orders[i].pizzas;
    }
    return pizzasTotales;
}
console.log(numberOfPizzas());



//Key y Objetos =>
const object = { a: 1, b: 2, c: 3 } 
for(let key in object) {
    console.log(key);
}
//Retornar valores
const object2 = { a: 1, b: 2, c: 3 } 
console.log( Object.keys(object2) ); // ['a', 'b', 'c']
console.log( Object.values(object2) ); // [1, 2, 3]
//Retornar longitud del objeto
function numberOfKeys(object) {
    return Object.keys(object).length;
}


// Editar Propiedades de un Objeto =>
const person = {
    name: "James",
    age: 22
}

person.name = "Sally";
person["age"] = 30;

console.log( person.name ); // Sally
console.log( person.age ); // 30


// De igual forma que modificamos propiedades tambien podemos eliminarlas =>
delete person.name;
console.log( person.name ); //Undefined


//Remover el valor de la propiedad object
function removeSecret(object) {
    return delete object.secret
}