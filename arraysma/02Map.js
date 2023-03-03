// Map nos permite realizar transformaciones en arrays es decir creara
// un nuevo array con las modificaciones realizadas.

const frutas = ["pera", "uva", "manzana"];
const modificacionArray = frutas.map((item) => item + "1");
console.log(modificacionArray); //[ 'pera1', 'uva1', 'manzana1' ]
