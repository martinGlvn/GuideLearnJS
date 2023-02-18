// Cuando hablamos de destructuracion hacemos referencia a la accion de extraer valores de datos que se encuentran
// almacenados en objetos u arrays y asignarlos a diversas variables. Existen diversos metodos de extraccions.

// Desestructuracion Arrays basica =>
const argentina = ["Buenos Aires", "Cordoba", "Mendoza"];
const [a, b, c] = argentina;
console.log(a); //Buenos Aires
console.log(b); //Cordoba
console.log(c); //Mendoza

// Desestructuracion Objetos basica =>
const martin = {
  name: "martin",
  age: 55,
  work: "SoftwareDev",
  lastName: "Galván",
  car: "audiTT",
};
const { name, age, work } = martin;
console.log(name, age, work);

// De igual forma podriamos crear un objeto a la par de la desestructuracion y asignarles los objetos sobrantes.
const { lastName, ...datosExtras } = martin;
console.log(lastName, datosExtras); // Galván { name: 'martin', age: 55, work: 'SoftwareDev' }

// Tambien podremos moficar el nombre de nuestras variables que se encuentran dentro del objeto martin ==>
const { car: newCar } = martin;
console.log(newCar); // audiTT

// Como accedemos a una propidad que se encuentra dentro de un objeto que esta dentro de otro objeto =>
const autos = {
  mercedesBenz: {
    color: "red",
    model: "A51",
  },
  audi: {
    color: "White",
    model: "AudiTT",
  },
};
const {
  audi: { color },
} = autos;
console.log(color); //White
