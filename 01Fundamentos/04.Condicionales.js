/** ==============CONDICIONALES====================
 * 
 * Los condicionales los utilizamos para establecer una condicion
 * y en caso de que la misma se de retornar una porcion de codigo.
 * 
 * 
 * 1- Si 1 es igual a 1 imprimimos por pantalla "Yup, that's true!"
 * 2- condicional If utilizando el condional !== "distinto"
 * 3- Booleano como condicion.
 * 4- Else If => En caso de que nuestro if no funcione se ejecutara "Else"
 * 5- Mayor que > 
 * 6- Funcion que toma 2 parametros y retorna codigo
 * 7- Funcion que comprueba si el usaurio tiene entrada o subscripcion "Else If".
 */

if(1 === 1) {
    console.log( "Yup, that's true!" );
}

if(1 ==! 2){
    console.log("Son distintos");
}

const a = true;
if(a) { // Si a es true imprime "hi!"
    console.log('hi!');
}


if(isRaining === true) {
    stayIndoors();
}
else {
    goOutside();
}

if(5 > 10){
    return "---------"
}else{
    return "---------"
}

const x =10;
const y =20;
if(x >= y){ 
    return true;
}


function isEqual(a,b) {
    if(a === b) {
        console.log('They are equal!');
    }
    else {
        console.log('They are not equal!');
    }
}

function canAccess(purchasedSubscription, freeTrial) {
    if (purchasedSubscription){
        return true;
    }else if(freeTrial){
        return true;
    }else{
        return false;
    }
}
