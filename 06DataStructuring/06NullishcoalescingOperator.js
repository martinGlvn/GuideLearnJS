// En este ejemplo se evaluara a la variable x como "false" debido a que su valor es 0
const x = 0;
const rest = x || 10;
console.log(rest); //10

// En este 2do ejemplo sucederia lo mismo ya que z al tener una cadena vacia se evalua como false
const z = "";
const rest2 = z || 10;
console.log(rest2); //10

// La solucion para estos casos es utilizar nuestro operador de "cortocircuitos"
const solucion = 0;
const w = solucion ?? 10;
console.log(w); //0
