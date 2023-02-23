// Cuando hablamos de destructuracion hacemos referencia a la accion de dividir codigo complejo en partes mas pequeñas.

// Desestructuracion array
const arr1 = ["hola", "chau", "que tal"];
const [a, b, c] = arr1;
console.log(a, b, c);

// Desestructuracion de un array dentro de un objeto
const restaurant = {
  comida: ["pizza", "empanadas", "fideos"],
};
const [primerComida, , terceraComida] = restaurant.comida;
console.log(primerComida, terceraComida); //pizza fideos

// Destructuracion de un arreglo anidado
const arr2 = [1, 2, [3, 5]];
const [uno, , dos] = arr2;
console.log(uno, dos); //1 [ 3, 5 ]

// Destructuracion de arreglo anidado elemento x elemento
const arr3 = [1, 2, [3, 5]];
const [one, , [three, five]] = arr3;
console.log(one, three, five); // 1 3 5

// Valores por default en desestructuracion => ¿Que pasaria si NO cocemos la longitud del array
// y esperamos un elemento que no se encuentra en el array que recibimos, bueno por defecto
// recibiriamos el valor como "undefined" para solucionar esto utilizamos los valores x defecto.
const arr4 = ([a = 1, b = 1, c = 1, d = 1] = [10, 11, 21]);
console.log(a, b, c, d); //10 11 21 1
