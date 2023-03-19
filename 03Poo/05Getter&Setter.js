// Tanto "getter" como "setter" son propiedades que contienen los objetos que nos permiten transformar propiedades

const perro = {
  name: "pedro",
  age: 9,
  x: ["1", "2"],
  // Manipulamos una propiedad del objeto dentro del mismo con "get"
  get nameMayus() {
    return this.name.toUpperCase();
  },
  set agregarName(nuevoNumero) {
    return this.name.push(nuevoNumero);
  },
};
console.log(perro.nameMayus); //PEDRO

perro.x = "3";
console.log(perro); // x : ["1", "2", "3"]
