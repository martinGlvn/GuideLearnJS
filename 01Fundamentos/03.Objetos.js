//Objetos literales => Normalmente gracias a los objetos podemos representar cosas
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

//Objeto + Funcionalidades && Metodos
const introducir = (nombre, color) => {
  const auto = ((nombre = nombre), (color = color));
  const imprimirInfo = `El modelo del auto es ${nombre} y su color 
    es ${color}`;
  return imprimirInfo;
};

console.log(introducir("Mercedes Benz", "Rojo"));

// funcionalidad en objeto.
const gato = {
  nombre: "MISHISHI",
  comerDos() {
    console.log("gato comiendo dos");
  },
};

// Objeto THIS => hace referencia al objeto en el cual nos encontramos
const perro = {
  nombre: "juan",
  favFood: "Pollo",
  dog() {
    console.log(
      `este perro llamado ${this.nombre} le gusta mucho el ${this.favFood}`
    );
  },
};
console.log(perro.dog());

//Preguntaremos al usario que es lo que desea saber del objeto.
const martin = {
  name: "martin",
  job: "dev",
  age: 25,
};
const interes = prompt("¿Que deseas saber de martin name, job o age?");
console.log(martin[interes]);

// Crea una funcion que me permita buscar y retorne los valores de los objeto lookup.
function phoneticLookup(val) {
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  const acceso = lookup[val];
  return acceso;
}
console.log(phoneticLookup("alpha")); // => Adams

//Manipulando objectos complejos => Añadi un nuevo arreglo al objeto ourMusic
const myMusic = [
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    gold: true,
  },
];
myMusic.push({
  artist: "Adele",
  title: "Hello",
  release_year: 2015,
  formats: ["CD", "Digital"],
  gold: true,
});
console.log(myMusic);

// Accede a las propiedades de objetos Anidados
const ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};
console.log(ourStorage.cabinet["top drawer"].folder2); // "secrets"
console.log(ourStorage.desk.drawer); //  "stapler"

// Accediendo a objetos anidados 2do EJEMPLO =>
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
const gloveBoxContents = myStorage.car.inside["glove box"];

// Accede a arreglos anidados
const ourPets = [
  { animalType: "cat", names: ["Meowzer", "Fluffy", "Kit-Cat"] },
  { animalType: "dog", names: ["Spot", "Bowser", "Frankie"] },
];
ourPets[0].names[1]; //FluffY
ourPets[1].names[0]; //Spot
