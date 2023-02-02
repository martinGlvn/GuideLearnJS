// En Js cuando queremos almacenar diversos elementos utilizamos 
// un array o tambien llamada matriz, 
const numbers = [1, 2, 3, 4, 5];
const booleans = [true, false, true, true];
const strings = ["happy", "go", "lucky"];


//Array dentro de un Array
const nested = [[1, 2, [1, 2]], 2];
console.log(nested[0]);


// Indexación de Arrays =>
const arr = ['h','a','p','p','y'];
for(let i = 0; i < arr.length; i++) { //Imprimimos letra por letra del array
    console.log(arr[i]);
}
console.log(arr.length); //Tambien podemos utilizar el metodo .length para los arrays.



// Arrays =>
const frutas = ["pera", "manzana", "anana"];
console.log(frutas[0])//obtener el elemento 1 de la lista

frutas.push("banana");//Agregar elemento al final de nuestro array
console.log(frutas);//["pera", "manzana", "anana", "banana"];

console.log(frutas.slice(0,2))//Obtenemos 2 elementos de nuestro array

console.log(frutas.indexOf('pera'))//Consultar indice de elemento

console.log(frutas.length)//longitud total de nuestro array 


//Trabajando con Arrays => => => => => => => =>


//Completa la función hasOne que toma una matriz de números.
//Devolución true si cualquier de los números en el array son 1. Devolución false si no.
function hasOne(array) {
    for(let i = 0; i < array.length; i++) { //Imprimimos letra por letra del array
        console.log(array[i]);
        if(array[i] === 1){return true}
        else{false};
    }
}

// Queremos saber si todos los numeros son inferiores a 10
function lessThanTen(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 10) {
            return false;
        } 
    }
    return true;
}

//valor promedio en un array =>
function average(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total +=  array[i];
    }
    return (total / array.length); //Retornamos el promedio dividiendo el total por la longitud => 26/3
}
console.log(average([1,5,20]));



//Dada una matriz, encuentre el suma de todo incluso valores dentro de la matriz y devolverla.
function sumEven(array) {
    let totalPar = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            totalPar += array[i];
        }
    }
    return totalPar;
}
console.log(sumEven([5,14,10]));



//Filtramos elementos de una matriz < 5   "Utilizando METODO PUSH"
function greaterThanFive(array) {
    const newArray = []; //Array que almacena numeros > 5
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element > 5) {// Si element es > 5  push elemt al array
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(greaterThanFive([10,3,5,60,25])); //Rta => [10,60,25]



// Si el array contiene el elemento 5 retorna 5
const element = 5;
const array = [1,2,3];
const isContained = array.indexOf(element) >= 0;
console.log(isContained);



//Escriba una función que tome una matriz de números y
//devuelva una nueva matriz que solo contenga números únicos.
function unique(array) {
    const onlyArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (onlyArray.indexOf(element) === -1) { //Si el array no contiene el element
            onlyArray.push(element);             //indexOf devolverá -1
        }
    }
    return onlyArray;
}
console.log([5, 5, 10]);



//Modificar valores de un array
const array2 = [1,2,3];
array2[0] = 5;
console.log(array2); // [5,2,3]



//Completa el addOne función para agregar 1 a cada elemento dentro de la matriz.
//Como estamos modificando la matriz directamente no lo devuelvas.
function addOne(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]++
    }
}



//Eliminar elementos de un array menores a 5  => .Splice
function greaterThanFive(array) {
    for(let i = array.length - 1; i >= 0; i--) {
        if(array[i] <= 5) {
            array.splice(i, 1);
        }
    }   
}



// Dado un array de enteros y un número, num, encuentre todas las ocurrencias
// del número y elimínelo de la matriz. Modificar la matriz directamente y no
// devuelvas nada de esta función.
function removeOccurrences(array, num) {
    for(let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i, 1);
        }
    }
}


