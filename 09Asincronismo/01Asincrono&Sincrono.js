// Sincrono vs Asincrono

// Sincrono Ejecucion => 1 -> 2 -> 3 -> 4 -> 5
console.log("hola");
console.log("mi");
console.log("nombre");
console.log("es");
console.log("martin");

// Asincrono Ejecucion =>
console.log("hola");
console.log("mi");
console.log("nombre");
setTimeout(() => {
  console.log("es");
}, 2000);
console.log("martin");
