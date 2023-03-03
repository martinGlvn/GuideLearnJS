// En es6 se implemento una nueva forma de recorrer arrays

// For of => Utilizamos el spread operator para almacenar 2 arrays en 1 y con el for of lo recorremos por completo =>
const menuComidas = {
  italianas: ["pizza", "lasagna", "pastas"],
  argentinas: ["asado", "empanadas", "milanesas"],
};

const menu = [...menuComidas.italianas, ...menuComidas.argentinas];

for (const extendMenu of menu) console.log(extendMenu); //pizza lasagna pastas asado empanadas milanesas.

// ¿Como obtenemos el indice del elemento recorrido junto a su valor contenido?
for (const extendMenu of menu.entries()) {
  console.log(extendMenu); //[ 0, 'pizza' ] [ 1, 'lasagna' ] [ 2, 'pastas' ] ...
}

// Como bien sabemos siempre el indice de un array comienza en 0, modifiquemos eso para nuestro menu
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`); // 1 : pizza 2 : lasagna 3 : pastas 4 : asado
}
