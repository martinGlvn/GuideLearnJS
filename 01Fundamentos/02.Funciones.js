/** ======================== Funciones ========================
 * Las funciones nos permiten la reutilizacion de codigo
 * 
 * 1- Function que retorna el numero 4 y almacenamos su valor en una funcion.
 * 2- Function que recibe un parametro de entrada y le suma +1.
 * 3- Function que suma 2 parametros de entrada.
 * 4- Function que multiplica 2 parametros de entrada.
 * 5- Function que divide 2 parametros de entrada.
 * 6- variable que almacena una division.
 * 
 * 7- Metodo "Math Random" devuelve un numero random entre 0 y 1 sin incluir el 1. 
 * 8- Function que retorna un numero random
 * 9- Generar numero aleatorio entre 0 y 100.
 * 10- Generar numero aleatorio entre 10 y 20.
 * 
 * 11- Metodo "Math floor" devuelve el entero de un numero decimal.
 * 
 */

function getNumber() {
    return 4;
}
const a = getNumber();


function addOne(input) {
    return input + 1;
}


function sum(a,b){
    return a + b;
}
console.log(sum(15,10));


function multiply(c,d){
    return c * d;
}
console.log(multiply(10,10));


function split(f, g){
    return f / g;
}
console.log(split(50, 10));


const div = (10+20+30) / 3;
console.log(div);


const randomNumber = Math.random();
console.log(randomNumber);


function randomNumber2(){
    const randomNumber3 = Math.random();
    return randomNumber3;
}
console.log(randomNumber2());


const random0Y100 = Math.random() * 100;
console.log(random0Y100);


const random10Y20 = (Math.random() * 10) + 10;
console.log(random10Y20);


const random100Y500 = (Math.random() * 400) + 100;
console.log(random100Y500);


const mathFloorA = Math.floor(10.25);
console.log(mathFloorA);

