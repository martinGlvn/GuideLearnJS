// El spread operator nos permite unificar arrays creando uno nuevo =>
const numeros = [1, 5, 10];
const numeros2 = [15, 20, 25];
const unificaNumeros = [...numeros, "---", ...numeros2];
console.log(unificaNumeros); //[ 1, 5, 10,"---" 15, 20, 25 ]
