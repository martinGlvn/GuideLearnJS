const datos = {
  name: "martin",
  edad: 50,
  ciudad: "logc",
};

console.log(datos.hasOwnProperty("name")); // true

// Encadenamiento Opcional => Verificamos si el dato se encuentra dentro de este array
console.log(datos?.name); //true martin
