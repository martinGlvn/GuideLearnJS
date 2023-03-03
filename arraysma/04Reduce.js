// Reduce se encarga de tomar un array y reducirlo a un solo valor.

const numeros = [1, 2, 3, 4, 5];

// Suma de expresiones sin reduce.
let suma = 0;
for (let index = 0; index < numeros.length; index++) {
  const element = numeros[index];
  suma = suma + element;
}
console.log(suma); //15

// Suma de expresiones con reduce.
//--------------------.reduce-------inicio--indice-------------------EstadoInicial
const sumadeValores = numeros.reduce((suma, element) => suma + element, 0);

// ---

/* Queremos retornar cuandos elementos iguales o unicos se encuentran en  nuestro array
Salida Esperada =
    {   
    valores - cantidad
        10  :  2,
        50  :  1,
        42  :  1,
       100  :   3
    }
*/
const numeros2 = [100, 10, 50, 10, 42, 100, 100];

numeros2.reduce;
