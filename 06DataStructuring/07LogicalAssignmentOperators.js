//Operadores de Asignacion

//Restaurantes Obj1 Obj2
const rest1 = {
  name: "Italian",
  capacidad: 50,
};
const rest2 = {
  name: "Frances",
  dueño: "Martin",
};

// Asinamos una nueva propiedad a la que se le agrega como valor 10 debido que hasta el momento numGuest es "undefined"
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

// Operator ||=
// Gracias al operador OR prodremos escribir lo mismo de una mejor forma.
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Operator ??=
// Que pasaria si en nuestro objeto existiese la propiedad y que ya contenga de valor 0?
// bueno en ese caso existiria un error muy tipico y se le sumaria 10 de igual forma debido
// a que 0 es tomado por javascript como "negativo"
// Nullish Operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// Operator &&=
// Si existe la propiedad owner y ademas contiene un valor asignamores otro valor si las 2 se cumplen.
rest1.owner &&= "MARTIN";
rest2.owner &&= "NACHO";
