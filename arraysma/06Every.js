// Every es lo opuesto a some es decir en every todos sus elementos debe cumplir
// con la condicion para que retorne un TRUE or FALSE.

const numeros = [5, 10, 22, 23];

// Si uno de los elementos es >= 40 return false "lo resolvemos con un for"
let rta = true;
for (let index = 0; index < numeros.length; index++) {
  const element = numeros[index];
  if (element >= 40) {
    rta = false;
  }
}
console.log(rta);

// Utilizando Every
const rta2 = numeros.every((numero) => numero <= 40); //Todos los numeros deben ser menores a 40.
console.log(rta2);
