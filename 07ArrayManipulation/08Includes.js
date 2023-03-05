// Este metodo verifica si un elemento se encuentra dentro de un array y nos retorna "TRUE" or "False".

const animales = ["perro", "gato", "pajaro"];

// Utilizando ciclo for => Si perro se encuentra dentro de "animales" retorna "true".
let include = false;
for (let index = 0; index < animales.length; index++) {
  const element = animales[index];
  if (element === "perro") {
    include = true;
  }
  break;
}
console.log(include); //True

// Mismo ejercicio utilizando "Include".
const include2 = animales.includes("perro"); // si animales contiene el elemento "perro" retorna true
console.log(include2); // true
