// El metodo "JOIN" lo utilizamos para unificar datos.

const nombres = ["martin", "juan", "carlos"];

// Unificando elementos utilizando un ciclon "for"
let rtaFinal = "";
const separator = "--";
for (let index = 0; index < nombres.length; index++) {
  const element = nombres[index];
  rtaFinal += element + separator;
}
console.log(rtaFinal); // martin--juan--carlos--

// Unificando elementos utilizando un ciclon "JOIN"
const rtaFinal2 = nombres.join("--");
console.log(rtaFinal2); //martin--juan--carlos

// Utilizaremos el metodo "split" y join para eliminar los espacios de nuestra cadena de texto. y cambiarlos por -
const saludo = "hola mi nombre es martin";
const espaciosEliminados = saludo.split(" ").join("-");
console.log(espaciosEliminados); // hola-mi-nombre-es-martin
