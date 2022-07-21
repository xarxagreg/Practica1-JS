

import {findMid} from "./findMid.js";

let NUMERO_MAXIMO=6;
let NUMERO_MINIMO=1;
let vector=[];


for(let i=1; i<=6000; i++){
const tiradaDado1=parseInt(Math.floor((Math.random() * (NUMERO_MAXIMO - NUMERO_MINIMO + 1)) + NUMERO_MINIMO));
const tiradaDado2=parseInt(Math.floor((Math.random() * (NUMERO_MAXIMO - NUMERO_MINIMO + 1)) + NUMERO_MINIMO));

let sumaDados=tiradaDado1+tiradaDado2;
vector.push(sumaDados);
console.log(`${i} Tirada del dado Uno es: ${tiradaDado1}, Tirada del dado Dos es: ${tiradaDado2} la suma de la tirada es: ${sumaDados}`);
}


console.log(`El vector buscado es: ${vector}`);
console.log (`La media del vector buscado es: ${findMid(vector)}`);



