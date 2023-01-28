// Ejercicios---->


// EVEN NUMBERS => 1.
//Dado un valor entero num, determinar si es incluso.
//Si es incluso, regreso true. Devolución false de lo contrario.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(1));



// SMALLER NUMBER => 2.
// La función smallerNumber se le darán dos desigual números: num1 y num2.
// ¡Su objetivo es encontrar el número más pequeño y devolverlo!

function smallerNumber(num1, num2) {
    if(num1 < num2){
        return num1;
    }else{
        return num2;
    }
}


//Check Number => 3.
// 1-La función checkNumber toma un solo argumento: un número num.
// 2-La función debe devolver la cadena positive si el número es positivo,
//   negative si el número es negativo, y zero si el número es cero.
function checkNumber(num) {
    if(num > 0){return num}
    else if(num < 0){return num}
    else{return 0}
}
console.log(checkNumber(0));


//Total Sum => 4.
// La función maxSum toma un argumento numérico num.
// Su objetivo es encontrar la suma de todos los números, desde 1, hasta e incluyendo num.
// Por ejemplo, si num es 5, tu suma sería 1 + 2 + 3 + 4 + 5 o 15.
function maxSum(num) {
    let sum = 0; // 1 - 2 - 3 - 4 - 5 - 6
    for(let i = 1; i <= num; i++) {
        sum+= i;
    }
    return sum;
}
console.log(maxSum(6));