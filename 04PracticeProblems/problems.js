// PROBLEM:

// Trabajamos para una empresa que construye un termómetro doméstico inteligente.
// Nuestra tarea más reciente es esta: "Dada una serie de temperaturas de un día,
// calcular la amplitud de temperatura. Tenga en cuenta que a veces puede haber un error de sensor".

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Entendiendo el problema
//¿Que es la amplitud de la temperatura? => La diferencia entre la mayor y menor.
//¿Como calculamos la temperatura mas alta y mas baja en un array?
//¿Como se ve el error en un sensor?

// 2) Dividir en subproblemas
//Ignorar los errores
//Valor maximo de temperatura en el array
//Valor minimo de temperatura en el array
//Restar el minimo al maximo y retornar => AMPLITUD

const calcAmplitud = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > 0) max = temps[i];
  }
  console.log(max);
};
