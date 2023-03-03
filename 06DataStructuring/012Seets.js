const autos = new Set();
autos.add("audi");
autos.add("porsche");
console.log(autos); // Set(2) { 'audi', 'porsche' }

for (const it of autos) {
  console.log(it); //audi porsche
}

// Verificamos si el set contiene este elemento
console.log(autos.has("audi")); // true

// Eliminamos un elemento
autos.delete("porsche");
console.log(autos);
