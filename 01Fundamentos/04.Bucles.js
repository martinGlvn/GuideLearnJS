/** ================Bucles==============
 * 
 * Cuando hablamos de bules nos referimos a la forma de repetir codigo
 * hasta que la condicion se establece.
 * 
 * 1- Imprimimos la sumatoria de index(i) + la variable sum que va aumentando.
 * 2- Funcion que encuentra la suma de todos los valores hasta el maximo del parametro.
 * 3- Funcion que encuentra el factorial para un numero por parametro.
 * 4- Bucle for que agrega caracteres a nuestra variable.
 * 5- Funcion que recibe un parametro numero y retorna un string con la cantidad de letras del parametro.
 * 6- Funcion que recibe un parametro n y devuelve un string iterando entre Mayusculas y Minusculas
 * 7- While =>
 */

let sum = 0;
for(let i = 1; i <= 4; i++) { 
    sum = sum + i; 
    console.log(sum); // 1 - 3 - 6 - 10
}



function summation(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


function factorial(n) {
    let total = 1;
    for(let i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}
console.log(factorial(5));


let str = "Hello World";
for(let i = 1; i <= 5; i++) {
    str += "!";
}
console.log(str);


function scream(n) {
    let scream = "";
    for (let i = 0; i < n; i++) {
        scream += "a";
    }
    return scream;
}


function scream(n) {
    let scream = "";
    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            scream += "a";
        }
        else {
            scream += "A";
        }
    }
    return scream;
}

