//Objetos => Normalmente gracias a los objetos podemos representar cosas
//mediante codigo como por ejemplo personas, autos, animales, etc.

const persona = {
  name: "Martin", //Propiedad "name"
  lastName: "Galván", //Propiedad "lastName"
};

// Acceder a propiedades del objeto
console.log(persona.name); // Martin
console.log(persona["name"]); // Martin

//Asignar propiedades nuevas a un objeto =>
persona.pais = "Argentina";
console.log(persona.pais); //"Argentina"
persona["dni"] = "42.432.4.234242";
console.log(persona["dni"]); //'42.432.4.234242'

//Imprimir objeto con sus propiedades y valores
console.log(persona); // {name:"Martin",lastName:"Galván",pais:Argentina}

//Objeto + Funcionalidades
const introducir = (nombre, color) => {
  const auto = ((nombre = nombre), (color = color));
  const imprimirInfo = `El modelo del auto es ${auto.nombre} y su color 
    es ${auto.color}`;
};

console.log(imprimirInfo())
console.log(introducir("Mercedes Benz", "Rojo"));


//Preguntaremos al usario que es lo que desea saber del objeto.
const martin ={
  name : "martin",
  job : "dev",
  age : 25
}
const interes = prompt('¿Que deseas saber de martin name, job o age?');
console.log(martin[interes])

