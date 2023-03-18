const gato = {
  // clave - valor
  nombre: "mishi",
  edad: 5,
};

// Leer propiedades del objeto =>
console.log(gato.nombre);
console.log(gato.edad);
console.log(gato["nombre"]);
console.log(gato["edad"]);

// Crear Read Update Delete

// Crear
gato.nombre = "anashe";
gato.edad = 10;
console.log(gato); // { nombre: 'anashe', edad: 10 }

// Ubpdate
gato.nombre = "juan";
console.log(gato); // { nombre: 'juan', edad: 10 }

//  Delete
delete gato.nombre;
console.log(gato); // { edad: 10 }
