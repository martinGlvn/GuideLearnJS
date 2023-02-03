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



//Functions =>

//Funcion Jugo de frutas ------>
function jugoDeFrutas(manzanas,naranjas){
    const jugo = `Este jugo contiene ${manzanas} manzanas y ${naranjas} naranjas`;
    return jugo
}
const retornarJugo = jugoDeFrutas(50,25);
console.log(retornarJugo);


/*                   Functiones = Declaradas y Expresivas  
 * "Cual es la diferencia entre ambas?" La verdad es que ambas funciones cumplen
 * con el mismo objetivo a pesar de que las funcion expresiva se almacena en una 
 * variable, pero la principal diferencia es que una funcion declarada se puede
 * realizar su llamado antes de ser inicializada en el codigo
 */

//Function Declarada
const edad = calcularEdad1(2001);

function calcularEdad1(nacimiento){
    return 2023 - nacimiento;
}

//Function Expresiva =>
const calcularEdad2 = function (nacimiento){
    return 2023 - nacimiento;
}
const edad2 = calcularEdad2(2001);


// Arrow Functions =>
const edadJubilatoria = (nacimiento,name) =>{
    const edad = 2023 - nacimiento;
    const jubilacion = 65 - edad;
    return `${name} se jubilara en ${jubilacion}`;
}
console.log(edadJubilatoria(2001,"Martin"));


//Functions Calling Other Functions => Llamada de una funcion dentro de una funcion
const cortarFrutas = function (fruta){
    return fruta * 4
}
const procesarFrutas = function (pera, banana){
    const piezasPera = cortarFrutas(pera);
    const piezasBanana = cortarFrutas(banana);

    const jugos = `${piezasPera},${piezasBanana}`
    return jugos;
}
console.log(procesarFrutas(5,10));

// 1 hora seccion 2
