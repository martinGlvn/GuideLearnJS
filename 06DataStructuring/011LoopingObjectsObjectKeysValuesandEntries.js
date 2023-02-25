// Obtener el nombre de las propiedades de nuestros objetos =>
const auto = {
  mercedesBenz: {
    modelo: "A50",
    color: "rojo",
    motor: { cilindros: "v8", capacidad: "50ml" },
  },
};
const propiedades = Object.keys(auto.mercedesBenz); //[ 'modelo', 'color', 'motor' ]
console.log(propiedades);

// Obtener el valor de las propiedades de nuestros objetos =>
