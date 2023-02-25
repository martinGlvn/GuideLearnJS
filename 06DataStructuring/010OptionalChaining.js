// Encadenamiento opcional => es6 introdujo esta opcion para consultar y trabajar con datos de una
// manera mas sencilla y limpia mas cuando un objeto contiene objetos dentro de objetos.

// Encadenamiento Opcional utilizando "?" permite consultar la existencia de la propiedad
const horarioTrabajo = {
  lunes: { tarde: "4pm a 8pm" },
  martes: "12am a 8pm",
  miercoles: { mañana: { horario1: "2hs", horario2: "5hs" } },
};
console.log(horarioTrabajo.lunes?.noche); // undefined
console.log(horarioTrabajo.miercoles?.noche?.horario1); //undefined
console.log(horarioTrabajo.miercoles?.mañana?.horario1); //2hs

// Metodos en encadenamiento opcional => Array
// Consultamos si usuarios contiene en su array el indice 1 de lo contrario imprime "no existe"
const usuarios = [{ name: "martin", email: "hi@gmail.com" }];
console.log(usuarios[1]?.name ?? "No existe"); //No existe
